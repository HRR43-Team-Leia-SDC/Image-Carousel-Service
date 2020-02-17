-- Setup commands here (make sure to end enach command with a ';').  Also need to know how to trigger it.

DROP DATABASE IF EXISTS images;

CREATE DATABASE images;

\c images;

CREATE TABLE images (
  _id SERIAL PRIMARY KEY,
  id INTEGER NOT NULL,
  url VARCHAR(200) NOT NULL
);