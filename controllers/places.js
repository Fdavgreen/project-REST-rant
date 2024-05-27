const router = require('express').Router();
const express = require('express');
const app = express();
const places = require('../models/places');


router.get('/', (req, res) => {
    res.render('places/index', { places });
});

// router.get('/', (req, res) => {
//     res.render('/places');
// });

// GET /places
// router.get('/', (req, res) => {
//     let places = [{
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/foodplaces1.jpg',
//     }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/foodplaces2.jpg',
        
        
//     }];
//     res.render('places/index', { places });
// });

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show',{place: places[id]})
    }
  })
  
  

router.get('/new', (req, res) => {
    res.render('places/new');
});

// Route to display all places
router.get('/', (req, res) => {
    res.render('/places')
  })

  router.post('/', (req, res) => {
    // console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/error404scr.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
  

module.exports = router;




