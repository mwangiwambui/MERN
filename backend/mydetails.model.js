const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MyData = new Schema({
  first_name: String,
  last_name: String
});

module.exports = mongoose.model("my_details", MyData)