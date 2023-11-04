const express = require('express');

const cricketController = require('../controller/cricket');

const router = express.Router();

router.post('/add-cricket',cricketController.addCricket);

router.get('/get-crickets' , cricketController.getCricket );

router.delete('/delete-cricket/:id' , cricketController.deleteCricket );

module.exports = router;
