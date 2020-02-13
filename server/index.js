const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const Images = require('../database/index.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

app.get('/carousel/:id', (req, res, next) => {
  let id = req.params.id;
  Images.find({id: id})
  .exec((err, result) => {
    if (err) {
      console.log('error get request', err);
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  })
});

//write a post route
app.post('/carousel', (req, res) => {
  //pass req.body to a function that writes to the DB
  const newImage = new Images(req.body);
  newImage.save((err, result) => {
    if (err) {
      console.log('error get request', err);
      res.sendStatus(404);
    } else {
      res.json(result);
    };
  })
});

// //write a put route
app.put('/carousel/:refId', (req, res) => {
  //pass req.body to a function that updates the entry at refId in the DB
  let refId = req.params.refId;
  Images.updateOne({ _id: refId }, req.body, (err, result) => {
    if (err) {
      console.log('error get request', err);
      res.sendStatus(404);
    } else {
      res.json(result);
    };
  })
});

// //write a delete route
app.delete('/carousel/:refId', (req, res) => {
  //pass refId to a function that deletes the entry with refId in the DB
  let refId = req.params.refId;
  Images.deleteOne({ _id: refId }, (err, result) => {
    if (err) {
      console.log('error get request', err);
      res.sendStatus(404);
    } else {
      res.json(result);
    };
  })
})

module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
