// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const {Test} = require ('../models')

// mongoose connection
require("../config/db.connection");

///////////////////////////////
// ROUTES
////////////////////////////////

// TEST INDEX ROUTE
router.get('/', async (req,res)=>{ 
    try {
        const symptomsIndex = await Symptoms.find({})
        return res.status(200).json(symptomsIndex)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

// TEST POST ROUTE
router.post('/', async(req, res)=>{
    try{
        const newSymptoms = await Symptoms.create(req.body)
        res.status(201).json(newSymptoms)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})


