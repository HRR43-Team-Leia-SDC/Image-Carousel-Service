// const cassandra = require('cassandra-driver');

// const client = new cassandra.Client({
//   contactPoints: ['127.0.0.1', '127.0.0.1'],
//   localDataCenter: 'datacenter1',
//   keyspace: 'images'
// });

// client.execute("COPY images (uid, id, url) FROM '/Users/danmoy/HackReactor/repos/SDC-Project/Image-Carousel/database/data.csv' WITH DELIMITER=','")
//   .then(result => console.log('Import complete'))
//   .catch(err => console.log('Received error: ', err));

// ****This did not work.  it's possible that cassandra-driver does not support COPY feature from Cassandra.  Instead, from the cqlsh, I ran:  COPY images (uid, id, url) FROM '/Users/danmoy/HackReactor/repos/SDC-Project/Image-Carousel/database/data.csv' WITH DELIMITER=',' to seed the DB
