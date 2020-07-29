const marylandAlts = require('../../models/maryland911alternatives');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/maryland911alternatives', function (req, res) {
    marylandAlts
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: 'Error finding Maryland 911 Alternatives data',
          error: err,
        })
      );
  });

  // POST
  router.post('/maryland911alternatives', function (req, res) {
    let note = new marylandAlts(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
