const auth = (req, res, next) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = req.headers.authorization;
  if (!providedPassword || providedPassword !== `Bearer ${adminPassword}`) {

    return res.status(401).send({ error: 'Authentication required' });
  }

  next();
};

module.exports = auth;