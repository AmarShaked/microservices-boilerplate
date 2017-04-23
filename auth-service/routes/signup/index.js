const express = require('express');
const router = express.Router();
const User = require('../../models/User');


/**
 * POST /signup
 * Create a new local account.
 */
const signup = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 6 characters long').len(6);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json(errors);
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      return res
              .status(400)
              .json({ msg: 'Account with that email address already exists.' });
    }
    user.save((err) => {
      if (err) { return next(err); }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    });
  });
};

router.route('/')
  .post(signup);

module.exports = router;