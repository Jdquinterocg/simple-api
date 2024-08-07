const express = require('express');
const connectToDatabase = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const db = await connectToDatabase();
        const collection = db.collection('Articles');
        
        const articles = await collection.find({}).toArray();
        res.json(articles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los artículos');
    }
});

module.exports = router;
