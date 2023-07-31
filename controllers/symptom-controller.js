// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()

// mongoose connection
require("../config/db.connection");

///////////////////////////////
// ROUTES
////////////////////////////////

// SYMPTOMS INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "symptoms index route"})
});

// SYMPTOMS CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "symptoms create route"})
});

// 

module.exports = router
