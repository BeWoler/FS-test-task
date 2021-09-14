const {Schema, model} = require('mongoose');

const DogsSchema = new Schema({
  breedId: {type: String, required: true},
  title: {type: String, required: true},
  img: {type: String}
})

module.exports = model('Dogs', DogsSchema);