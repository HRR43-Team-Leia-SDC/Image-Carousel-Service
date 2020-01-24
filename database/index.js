const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true, useUnifiedTopology: true  });
const Schema = mongoose.Schema;
const db = mongoose.connection;

// require('mongoose-type-url');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connected!");
});

const ImageSchema = new Schema({
  id: Number,
  url: String
  // width: Number,
  // height: Number
});

const Images = mongoose.model('Images', ImageSchema);


module.exports = Images;