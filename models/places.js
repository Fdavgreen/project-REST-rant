const mongoose = require('mongoose');

// Define the schema for a place
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
});

// Export the model for use in other parts of the application
module.exports = mongoose.model('Place', placeSchema);




pic: '/images/foodplaces1.jpg'
pic: '/images/foodplaces2.jpg'