module.exports = (req, res) => {
  return res.json(req.user);
};