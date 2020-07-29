import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
