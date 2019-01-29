const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();

mongoose
  .connect(
    process.env.DB_URL,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log('connection successful');
    },
    err => {
      console.log(err);
    }
  );

app
  .use(helmet()) // security middlewares
  .use(cors()) // public API, allow all origins
  .use(bodyParser.json()) // parse requests of content-type: application/json
  .use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type: application/x-www-form-urlencoded
  .use(cookieParser()) // parse Cookie header and populate req.cookies
  .use(compression()) // enable gzip compression
  .enable('trust proxy') // express-rate-limit, needed if behind a reverse proxy (Heroku, AWS ELB etc)
  .use(
    rateLimit({
      windowMs: 60 * 60 * 1000, // 1 hour window
      max: 60 // start blocking after 60 requests
    })
  ) // enable default API limits (60 in 1 hour)
  .use('/api/v1', routes) // define routes with versioned prefix
  .all('/*', (req, res) => res.status(200).send('Please read the API documentation')) // catch all route
  .use(errorHandler()); // custom middleware to catch all errors

module.exports = app;
