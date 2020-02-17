DROP KEYSPACE IF EXISTS images;

CREATE KEYSPACE images WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE images;

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  uid int PRIMARY KEY,
  id int,
  url text
);
