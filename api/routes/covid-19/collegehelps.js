const collegehelps = require('../../../models/covid-19/collegehelps');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/covid-19/collegehelps', function (req, res) {
    collegehelps
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding Mental and Emotional data',
          error: err,
        })
      );
  });

  // POST
  router.post('/covid-19/collegehelps', function (req, res) {
    let note = new collegehelps(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
