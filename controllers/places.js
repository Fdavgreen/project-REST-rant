const router = require('express').Router();
const express = require('express');
const app = express();

router.get('/', (req, res) => {
    res.send('places');
});

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }];
    res.render('places/index', { places });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// // GET /places
// router.get('/', (req, res) => {
//   // Define the places array
//   let places = [{
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
//   }];

//   // Render the 'places/index' view template and pass the 'places' array to it
//   res.render('places/index', { places });
// });

// module.exports = router;

