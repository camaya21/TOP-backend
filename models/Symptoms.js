///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const SymptomsSchema = new mongoose.Schema({
    cough: Boolean,
    headache: Boolean,
    chills: Boolean,
    diarrhea: Boolean,
    conjunctivitis: Boolean,
    fever: Boolean,
    muscleAche: Boolean,
    excessiveFatigue: Boolean,
    abdominalPain: Boolean,
    other: Boolean,
    troubleBreathing: Boolean,
    lossOfSmell: Boolean,
    nauseaVomiting: Boolean,
    skinRash: Boolean,
    noSymptoms: Boolean,
    date: { type: String, require: true },
    age: { type: String, require: true },
    sex: { type: String, require: true },
    race: { type: String, require: true },
    ethnicity: { type: String, require: true },
    zipCode: { type: String, require: true },
    dateOfBirth: { type: String },
    phoneNumber: { type: String },
    medicalHistory: { type: String },
    optStreetAddress: { type: String },
    optState: { type: String },
    optZipcode: {type: String},
},{timestamps: true});

const Symptoms = mongoose.model("Symptoms", SymptomsSchema);

module.exports = Symptoms

