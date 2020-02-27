DROP DATABASE IF EXISTS images;

CREATE DATABASE images;

\c images;

CREATE TABLE images (
  id INTEGER NOT NULL,
  _id SERIAL PRIMARY KEY,
  url VARCHAR(200) NOT NULL
);

COPY images (id, _id, url) FROM '/home/ubuntu/Image-Carousel-Service/database/data.csv' DELIMITER ',';

CREATE INDEX ON images (id);
