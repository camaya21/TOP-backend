///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema

///////////////////////////////
// MODELS
////////////////////////////////
const SymptomsSchema = new mongoose.Schema({
    date: { type: String, require: true },
    age: { type: String, require: true },
    sex: { type: String, require: true },
    race: { type: String, require: true },
    ethnicity: { type: String, require: true },
    zipcode: { type: String, require: true },
    dateOfBirth: { type: String, require: true },
    address: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    medicalHistory: { type: String, require: true },
},{timestamps: true});

// const Symptoms = mongoose.model("Symptoms", SymptomsSchema);

// module.exports = Symptoms
 export default mongoose.models.Symptoms || mongoose.model("Symptoms", SymptomsSchema);