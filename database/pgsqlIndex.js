const { Client } = require('pg'); //switch from client to pool as an optimization later.

const client = new Client({
  database: 'images',
  user: 'danmoy',
  password: '',
});