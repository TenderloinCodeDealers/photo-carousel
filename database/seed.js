const mongoose = require('mongoose');
const Faker = require('faker');

mongoose.connect(
  'mongodb://localhost/vourcher',
  { useNewUrlParser: true }
);

const imageSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  image: String
});

const Images = mongoose.model('Images', imageSchema);

const local = ['dog+images', 'fishing+images', 'food+images', 'restaurant+images', 'travel+images'];
const product = [
  'bicycle+images',
  'clothes+images',
  'headphones+images',
  'laptop+images',
  'shoes+images'
];

for (let i = 0; i < 100; i++) {
  if (i <= 50) {
    var randomCategory = local[Math.floor(Math.random() * 5)];
  } else {
    var randomCategory = product[Math.floor(Math.random() * 5)];
  }
  const numberPhotos = Math.ceil(Math.random() * 5);
  for (let j = 0; j < numberPhotos; j++) {
    const randomNum = Math.floor(Math.random() * 30);
    const instanceData = {
      id: i,
      image: `https://s3-us-west-1.amazonaws.com/vourcher/${randomCategory}/image-${randomNum}.jpg`
    };
    const imageInstance = new Images(instanceData);
    imageInstance.save(err => {
      if (err) return console.log(err);
    });
  }
}

const bannerSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  rating: Number,
  name: String,
  address: String,
  deal: String
});
const Banners = mongoose.model('Banners', bannerSchema);

for (let k = 0; k < 100; k++) {
  const randomRating = Math.floor(Math.random() * 6);
  const randomName = Faker.lorem.words();
  const randomAddress = Faker.address.streetAddress();
  const randomDeal = Faker.lorem.sentence();
  const instanceData = {
    id: k,
    rating: randomRating,
    name: randomName,
    address: randomAddress,
    deal: randomDeal
  };
  const bannerInstance = new Banners(instanceData);
  bannerInstance.save(err => {
    if (err) return console.log(err);
  });
}

module.exports.Images = Images;
