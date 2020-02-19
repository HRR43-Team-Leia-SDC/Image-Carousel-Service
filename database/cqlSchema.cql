DROP KEYSPACE IF EXISTS images;

CREATE KEYSPACE images WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

USE images;

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id int,
  uid int,
  url text,
  PRIMARY KEY (id, uid, url)
);
