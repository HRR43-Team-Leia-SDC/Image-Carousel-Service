# Dev instructions for the image carousel component.
npm install - for dependencies
npm run build -  for webpack to bundle
Must have MongoDB installed and running
npm run seed - to seed the DB
npm start - to run server


## Available API Routes

| Endpoint           | Type   | Operation                   |
|--------------------|--------|-----------------------------|
| `/carousel/:id`    | GET    | Get all images for a id     |
| `/carousel/:refId` | POST   | Add image with refId        |
| `/carousel/:refId` | PUT    | update image with refId     |
| `/carousel/:refId` | DELETE | delete image with refId     |
|--------------------|--------|-----------------------------|
id - The id of the page to be loaded
refID - `_id` created by mongoDB for each image