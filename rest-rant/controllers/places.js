const express = require('express');
const router = express.Router();
const render = require('../render');
const places = 

// GET /places
router.get('/', (req, res) => {
    res.render('places/index');
});

module.exports = router;

// let places = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'http://placekitten.com/250/250'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: 'http://placekitten.com/250/250'
//   }]