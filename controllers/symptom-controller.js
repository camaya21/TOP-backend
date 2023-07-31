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

// SYMPTOMS SHOW ROUTE
router.get("/:id", async (req, res) => {
	res.status(200).json({message: "symptoms show route: " + req.params.id })
});

// SYMPTOMS DELETE ROUTE
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "symptoms delete route: " + req.params.id })
});

// SYMPTOMS UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "symptoms update route: " + req.params.id })
});

module.exports = router
