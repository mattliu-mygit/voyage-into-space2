const mongoose = require('mongoose');

const HomeschoolingChildcareSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model(
  'homeschoolingandchildcare',
  HomeschoolingChildcareSchema
);
