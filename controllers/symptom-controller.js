// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const {Symptoms} = require ('../models')

// mongoose connection
require("../config/db.connection");

///////////////////////////////
// ROUTES
////////////////////////////////

// SYMPTOMS INDEX ROUTE
router.get('/', async (req,res)=>{ 
    try {
        const symptomsIndex = await Symptoms.find({})
        return res.status(200).json(symptomsIndex)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

// SYMPTOMS CREATE ROUTE
router.post('/', async(req, res)=>{
    try{
        const newSymptoms = await Symptoms.create(req.body)
        res.status(201).json(newSymptoms)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})


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
