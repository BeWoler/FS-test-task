const {Schema, model} = require('mongoose');

const BreedsSchema = new Schema({
  _id: {type: String, required: true},
  title: {type: String}
})

module.exports = model('Breeds', BreedsSchema);