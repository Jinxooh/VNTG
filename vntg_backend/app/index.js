/* 모듈 불러오기 */
require('dotenv').config();

const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');

const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');

const passport = require('passport');
require('./passport'); // set up passport

const api = require('./api');

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const MongoStore = connectMongo(session);

/* SETUP MIDDLEWARE */
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET_KEY || 'TempKey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000,
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60,
  })
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/', express.static(path.join(__dirname, '../../vntg_frontend/build/')));
// app.use('/', express.static(path.join(__dirname, '../../vntg_frontend/src/')));

app.use('/api', api);

/* handle error */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
      error: {
          message: 'Something Broke!',
          code: 0
      }
  });
  next();
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to mongod server');
});


// ENABLE DEBUG WHEN DEV ENVIRONMENT
if(process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
    app.use(morgan('tiny')); // server logger
}

mongoose.connect(process.env.DB_URI, { useMongoClient: true });

const server = http.createServer(app).listen(port, () => {
  console.log(`Express is running on port ${port}`);
});