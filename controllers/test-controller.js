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
        const testIndex = await Test.find({})
        return res.status(200).json(testIndex)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

// TEST POST ROUTE
router.post('/', async(req, res)=>{
    try{
        const newTest = await Test.create(req.body)
        res.status(201).json(newTest)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})
// TEST SHOW ROUTE
router.get('/:id', async(req,res)=>{
    try{
        const findTest = await Test.findById(req.params.id)
        res.status(201).json(findTest)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

// TEST DELETE ROUTE
router.delete('/:id', async(req,res)=>{
    try{
        const deletedTest = await Test.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedTest)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})



