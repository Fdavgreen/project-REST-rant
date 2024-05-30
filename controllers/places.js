
const express = require('express');
const router = express.Router();
const places = require('../models/places');

// Route to display all places
router.get('/', (req, res) => {
  res.render('places/index', { places });
});

// Route to display a single place by ID
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    res.render('places/show', { place: places[id], id });
  }
});

// Route to create a new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = '/images/error404scr.jpg';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

// Route to delete a place by ID
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

// Route to edit a place by ID
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    res.render('places/edit', { place: places[id], id });
  }
});

// Route to update a place by ID
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400';
    }
    if (!req.body.city) {
      req.body.city = 'Anytown';
    }
    if (!req.body.state) {
      req.body.state = 'USA';
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

module.exports = router;

