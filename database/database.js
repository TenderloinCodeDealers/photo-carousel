const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/vourcher',
  { useNewUrlParser: true }
);

const imageSchema = new mongoose.Schema({
  id: Number,
  image: String
});

const Images = mongoose.model('Images', imageSchema);

const findImage = (id, callback) => {
  Images.find({ id }, (err, results) => {
    if (err) {
      return console.log(err);
    }
    callback(results);
  });
};

module.exports.findImage = findImage;
