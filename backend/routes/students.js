const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const auth = require('../middleware/auth');

// Create new student
router.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get students with pagination (protected route)
router.get('/students', auth, async (req, res) => {
  try {
    // Extract query parameters
    const {
      name = '', // Case-insensitive partial match for student name
      branch = '', // Exact match for branch/department
      college = '', // Case-insensitive partial match for college name
      page = 1, // Default to the first page
      limit = 5 // Default records per page
    } = req.query;

    // Parse pagination parameters
    const recordsPerPage = Math.max(parseInt(limit), 1); // Ensure limit is at least 1
    const currentPage = Math.max(parseInt(page), 1); // Ensure page is at least 1
    const recordsToSkip = (currentPage - 1) * recordsPerPage;

    // Build the filter object
    const filters = {};

    if (name) {
      filters.name = { $regex: name, $options: 'i' }; // Case-insensitive partial match
    }

    if (branch) {
      filters.branch = branch; // Exact match
    }

    if (college) {
      filters.college = { $regex: college, $options: 'i' }; // Case-insensitive partial match
    }

    // Query the database with filters, pagination, and sorting
    const students = await Student.find(filters)
      .sort({ name: 1 }) // Sort alphabetically by student name
      .limit(recordsPerPage)
      .skip(recordsToSkip);

    // Get the total count of matching records
    const total = await Student.countDocuments(filters);

    // Send response
    res.send({
      students,
      total,
      pages: Math.ceil(total / recordsPerPage),
      currentPage
    });
  } catch (error) {
    // Handle errors gracefully
    res.status(500).send({ error: 'An error occurred while fetching student records.' });
  }
});



module.exports = router;