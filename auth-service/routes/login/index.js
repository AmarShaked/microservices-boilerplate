const express = require('express');
const passport = require('passport');
const User = require('../../models/User');
const router = express.Router();

const login = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json(errors);
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(401).json(info);
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
};


router.route('/')
  .post(login);

module.exports = router;