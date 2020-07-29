const unstableincome = require('../../../models/covid-19/unstableincome');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/covid-19/unstableincome', function (req, res) {
    unstableincome
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding Unstable Income data',
          error: err,
        })
      );
  });

  // POST
  router.post('/covid-19/unstableincome', function (req, res) {
    let note = new unstableincome(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
