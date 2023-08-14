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
