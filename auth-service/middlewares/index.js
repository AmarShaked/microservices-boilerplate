const bodyParser = require('body-parser');
const session = require('express-session');
const errorHandler = require('errorhandler');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');


exports.registerMiddlewares = (app) => {
  app.set('port', process.env.PORT || 5311);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
  app.use(errorHandler());
  app.use(expressValidator());
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
      autoReconnect: true,
      clear_interval: 3600
    })
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}