const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const middlewares = require('./middlewares');
const router = require('./routes');


/**
 * Create Express server.
 */
const app = express();

/**
 * Passport configuration.
 */
require('./config/passport');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Register all the middlewares
 */
middlewares.registerMiddlewares(app);

/**
 * Register all the routes
 */
router.registerRoutes(app);

/**
 * Connect to MongoDB.
 */
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});

app.listen(app.get('port'), function () {
  console.log('The auth service run on port %s!', app.get('port'));
});