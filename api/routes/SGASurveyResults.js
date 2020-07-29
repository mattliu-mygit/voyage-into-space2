const SGASurveyResults = require('../../models/SGASurveyResults');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/SGASurveyResults', function (req, res) {
    SGASurveyResults.find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res
          .status(500)
          .json({ message: 'Error finding SGA Survey percentages', error: err })
      );
  });

  // POST
  router.post('/SGASurveyResults', function (req, res) {
    let note = new SGASurveyResults(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
