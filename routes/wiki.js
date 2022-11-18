const express = require("express");
const wikiRouter = express.Router();
const { addPage } = require('../views')
wikiRouter.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next()
})

wikiRouter.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

wikiRouter.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});
module.exports = wikiRouter
