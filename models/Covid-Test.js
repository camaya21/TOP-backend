///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const TestSchema = new mongoose.Schema({
    image: {type: String, require: true},
},{timestamps: true});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test