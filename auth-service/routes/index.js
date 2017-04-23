const landingController = require('./landing');
const signupController = require('./signup');
const loginController = require('./login');
const logoutController = require('./logout');
const accountController = require('./account');


exports.registerRoutes = (app) => {
	app.use('/', landingController);
  app.use('/signup', signupController);
  app.use('/login', loginController);
  app.use('/logout', logoutController);
  app.use('/account', accountController);
};