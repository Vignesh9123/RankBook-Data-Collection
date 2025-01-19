export interface College {
    id: string;
    name: string;
    branches: string[]; // Array of branch IDs available in this college
  }
  
  export interface Branch {
    id: string;
    name: string;
  }
  
  export const colleges: College[] = [
    {
      id: "iit-delhi",
      name: "Indian Institute of Technology Delhi",
      branches: ["cse", "ece", "me", "ce", "ee"]
    },
    {
      id: "iit-bombay",
      name: "Indian Institute of Technology Bombay",
      branches: ["cse", "ece", "me", "ce", "ch"]
    },
    {
      id: "bits-pilani",
      name: "Birla Institute of Technology and Science, Pilani",
      branches: ["cse", "ece", "me", "ce", "ee"]
    },
    {
      id: "nit-trichy",
      name: "National Institute of Technology Tiruchirappalli",
      branches: ["cse", "ece", "me", "ce", "ee"]
    },
    {
      id: "iiit-hyderabad",
      name: "International Institute of Information Technology, Hyderabad",
      branches: ["cse", "ece", "ce"]
    }
  ];
  
  export const branches: Branch[] = [
    {
      id: "cse",
      name: "Computer Science and Engineering"
    },
    {
      id: "ece",
      name: "Electronics and Communication Engineering"
    },
    {
      id: "me",
      name: "Mechanical Engineering"
    },
    {
      id: "ce",
      name: "Civil Engineering"
    },
    {
      id: "ee",
      name: "Electrical Engineering"
    },
    {
      id: "ch",
      name: "Chemical Engineering"
    }
  ];