///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const SymptomsSchema = new mongoose.Schema({
    Date: { type: String, require: true },
    Age: { type: String, require: true },
    Sex: { type: String, require: true },
    Race: { type: String, require: true },
    Ethnicity: { type: String, require: true },
    Zipcode: { type: String, require: true },
    DOB: { type: String, require: true },
    Address: { type: String, require: true },
    PhoneNumber: { type: String, require: true },
    MedicalHistory: { type: String, require: true },
},{timestamps: true});

const Symptoms = mongoose.model("Symptoms", SymptomsSchema);

module.exports = Symptoms
