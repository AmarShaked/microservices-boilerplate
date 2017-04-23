const express = require('express');
const pjson = require('../../package.json');
const router = express.Router();

const landing = (req, res) => {
  const data = {
    name: pjson.name,
    version: pjson.version,
    author: pjson.author
  };

  res.status(200).json(data);
};

router.route('/')
  .get(landing);

module.exports = router;