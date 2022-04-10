const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MenuItems = new Schema({
  menuItem: String,
  priority: Number
});

module.exports = mongoose.model("menu_items", MenuItems)