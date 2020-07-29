const mongoose = require('mongoose');

const RacismHateCrimesSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('racismhatecrimes', RacismHateCrimesSchema);
