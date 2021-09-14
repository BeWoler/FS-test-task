const {Schema, model} = require('mongoose');

const DogsSchema = new Schema({
  _id: {type: String, required: true, unique: true},
  breedId: {type: String, required: true},
  title: {type: String},
  img: {type: String}
})

module.exports = model('Dogs', DogsSchema);