const { Client } = require('pg');

const client = new Client({
  database: 'images',
  user: 'danmoy',
  password: '',
});

client.connect();

client.query(`COPY images FROM '/Users/danmoy/HackReactor/repos/SDC-Project/Image-Carousel/database/data.csv' DELIMITER ','`, (err, res) => {
  console.log(err ? err.stack : 'Import complete')
  client.end();
})