const express = require('express');
const router = express.Router();
const { Symptoms } = require('../models');

router.get('/', async (req, res) => {

    try {

        const allPositives = await Symptoms.countDocuments({});

        res.status(200).json({ res: allPositives });

    } catch (err) {

        res.status(400).json({ error: err });

    };

});

module.exports = router;