const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MyData = new Schema({
  firstname: String,
  lastname: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("MyData", MyData)