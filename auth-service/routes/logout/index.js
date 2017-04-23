const express = require('express');
const router = express.Router();

const logout = (req, res) => {
  req.logout();
  res.json({msg: "You have successfully logged out"});
};

router.route('/')
  .post(logout);

module.exports = router;