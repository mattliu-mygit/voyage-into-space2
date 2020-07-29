const mongoose = require('mongoose');

const ResourceInsecuritySchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model(
  'resourceinsecurities',
  ResourceInsecuritySchema
);
