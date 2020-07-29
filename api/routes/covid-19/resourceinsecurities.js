const resourceinsecurities = require('../../../models/covid-19/resourceinsecurities');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/covid-19/resourceinsecurities', function (req, res) {
    resourceinsecurities
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding Resource Insecurity data',
          error: err,
        })
      );
  });

  // POST
  router.post('/covid-19/resourceinsecurities', function (req, res) {
    let note = new resourceinsecurities(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
