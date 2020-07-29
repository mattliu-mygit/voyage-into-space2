const mongoose = require('mongoose');

const SGASurveySchema = new mongoose.Schema({
  label: {
    type: String,
  },
  percentage: {
    type: Number,
  },
});

module.exports = mongoose.model('SGASurveyResults', SGASurveySchema);
