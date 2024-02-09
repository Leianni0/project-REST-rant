const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');

// GET List of Places
router.get('/', (req, res) => {
    res.send(render('places/index', { places: places}));
});

//Get Details of a Place 
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send(render('Error404'));

    } else if (!places[id]) {
        res.status(400).send(render('Error404'));

    } else {
        res.send(render('places/Show', { place: places[id], id: id }));
    }
});

router.get('/new', (req, res) => {
    res.send(render('places/new'))
});

router.post('/', (req, res) => {
    const newPlace = { ...req.body };
    if (!newPlace.pic) {
        newPlace.pic = 'https://via.placeholder.com/300';
    }
    if (!newPlace.city) {
        newPlace.city = 'Unknown';
    }
    if (!newPlace.state) {
        newPlace.state = 'USA';
    }
    places.push(newPlace);
    res.redirect('/places');
});

// Delete a Place


module.exports = router;

