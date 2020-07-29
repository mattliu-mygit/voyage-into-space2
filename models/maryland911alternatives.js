const mongoose = require('mongoose');

const MarylandAltSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('maryland911alternatives', MarylandAltSchema);
