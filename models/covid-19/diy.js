const mongoose = require('mongoose');

const DIYSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('diy', DIYSchema);
