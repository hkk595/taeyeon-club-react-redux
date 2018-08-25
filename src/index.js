import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

let store = configureStore();
// alert(JSON.stringify(store.getState()));

// All the components strictly follow the container-component pattern of react-redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
