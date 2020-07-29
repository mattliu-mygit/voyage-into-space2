const mongoose = require('mongoose');

const UnstableIncomeSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('unstableincome', UnstableIncomeSchema);
