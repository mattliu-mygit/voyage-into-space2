const mongoose = require('mongoose');

const MentalEmotionalSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('mentalandemotional', MentalEmotionalSchema);
