import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerSubsribes from './store/subscribes';
import 'font-awesome/css/font-awesome.css';
import './index.css';


const store = configureStore();
registerSubsribes(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
