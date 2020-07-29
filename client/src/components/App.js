import React from 'react';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Header from './common/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPAge from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CovidHome from './covid-19/CovidHome';
import HelpUsPage from './HelpUsPage';
import Maryland911Alternatives from './Maryland911Alternatives';
import DataPage from './DataPage';
import UsingMongoPage from './UsingMongoPage';

function App() {
  return (
    <div
      style={{
        paddingBottom: '1rem',
      }}
    >
      <ToastContainer autoClose={4000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/maryland-911-alternatives"
          component={Maryland911Alternatives}
        />
        <Route path="/covid-19" component={CovidHome} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/data" component={DataPage} />
        <Route path="/help-us" component={HelpUsPage} />
        <Route path="/mongo" component={UsingMongoPage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPAge} />
      </Switch>
    </div>
  );
}

export default App;
