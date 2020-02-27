const { Pool } = require('pg'); //switch from client to pool as an optimization later.

const pool = new Pool({
  host: '3.94.122.250',
  database: 'images',
  user: 'postgres',
  password: 'postgres',
  port: 5432
});

pool.connect();

module.exports.getImages = function(id, callback) {
  const query = 'SELECT url from images WHERE id=$1';
  const value = [parseInt(id)];
  pool.query(query, value, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows)
    }
  })
}