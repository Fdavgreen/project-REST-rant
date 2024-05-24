const router = require('express').Router();
const express = require('express');
const app = express();

// router.get('/', (req, res) => {
//     res.render('/places');
// });

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/foodplaces1.jpg',
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/foodplaces2.jpg',
        
        
    }];
    res.render('places/index', { places });
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

// Route to display all places
router.get('/', (req, res) => {
    res.render('/places')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  

module.exports = router;




