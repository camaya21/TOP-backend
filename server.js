///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

// app dependencies
const cors = require('cors')
const morgan = require('morgan')

// controllers
const symptomController = require('./controllers/symptom-controller');
const resultsController = require('./controllers/results-controller');
const testController = require('./controllers/test-controller')

// express / middleware
app.use(express.json());

//Cors helper function
app.use(cors());

//Morgan
app.use(morgan("dev"));

app.use('/symptoms', symptomController)
app.use('/results', resultsController);
app.use('/covid-test', testController)
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
