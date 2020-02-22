const { Client } = require('pg'); //switch from client to pool as an optimization later.

const client = new Client({
  database: 'images',
  user: 'danmoy',
  password: '',
});

client.connect();

module.exports.getImages = function(id, callback) {
  const query = 'SELECT url from images WHERE id=$1';
  const value = [parseInt(id)];
  client.query(query, value, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows)
    }
  })
}