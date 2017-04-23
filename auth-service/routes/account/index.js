const express = require('express');
const router = express.Router();
const getAccount = require('./account');
const passportConfig = require('../../config/passport');


router.route('/')
  .get(passportConfig.isAuthenticated, getAccount);

module.exports = router;