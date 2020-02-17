const fs = require('fs');

const dataGen = fs.createWriteStream('./database/data.csv');

function writeIt(totalRecs, writer, encoding, callback) {
  let _id = 0
  let i = totalRecs;

  function write() {
    let ok = true;
    do {
      i--;
      _id++;
      let randoImgNum = Math.floor(Math.random() * 51);
      let id = Math.floor(Math.random() * 10000000);
      let image = `https://image-carousel.s3-us-west-1.amazonaws.com/${randoImgNum}.jpg`;

      let data = `${_id},${id},${image}\n`

      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
  write();
}
writeIt(100000000, dataGen, 'utf-8', () => {dataGen.end()});

