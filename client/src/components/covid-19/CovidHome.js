import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SurveyTable from './SurveyTable';
import MentalEmotionalHelp from './MentalEmotionalHelp';
import NotFoundPage from '../NotFoundPage';
import UnstableIncomePage from './UnstableIncomePage';
import ResourceInsecurityPage from './ResourceInsecurityPage';
import CollegeHelpPage from './CollegeHelpPage';
import ChildcarePage from './ChildcarePage';
import DIYPage from './DIYPage';
import ReportPage from './ReportPage';
import YourHelp from './YourHelp';

const activeStyle = {
  color: '#89cff0',
  backgroundColor: 'transparent',
  boxShadow: 'none',
};

const CovidHome = () => {
  return (
    <div style={{ minWidth: '51.5rem' }}>
      <div className="placeholder"> |</div>
      <div
        className="jumbotron"
        style={{
          paddingBottom: '0.5rem',
          minHeight: '8rem',
          paddingTop: '2rem',
        }}
      >
        <h1>Covid-19 Pandemic Resources</h1>
      </div>
      <div
        className="main-content"
        style={{
          display: 'inline-block',
          width: '24.5%',
          fontSize: '1.25rem',
          marginTop: '1%',
          marginRight: '0rem',
          borderTopRightRadius: '0rem',
          borderBottomRightRadius: '5px',
          minWidth: '11.5rem',
        }}
      >
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/mental-emotional"
        >
          Mental and Emotional Resources
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/unstable-income"
        >
          Unstable Income
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/resource-insecurity"
        >
          Resource Insecurity
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/college-help"
        >
          College Help
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/childcare"
        >
          Homeschooling and Children
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/report"
        >
          Report Racism/Hate Crimes
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/diy-fun"
        >
          DIY Projects and Fun
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="btn btn-primary list-btn"
          to="/covid-19/your-help"
        >
          How <i>you</i> can help!
        </NavLink>
      </div>

      {
        // For Covid route handling
      }
      <Switch>
        <Route path="/covid-19/your-help" component={YourHelp} />
        <Route path="/covid-19/report" component={ReportPage} />
        <Route path="/covid-19/diy-fun" component={DIYPage} />
        <Route path="/covid-19/childcare" component={ChildcarePage} />
        <Route path="/covid-19/college-help" component={CollegeHelpPage} />
        <Route
          path="/covid-19/resource-insecurity"
          component={ResourceInsecurityPage}
        />
        <Route
          path="/covid-19/mental-emotional"
          component={MentalEmotionalHelp}
        />
        <Route
          path="/covid-19/unstable-income"
          component={UnstableIncomePage}
        />
        <Route path="/covid-19" exact component={SurveyTable} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default CovidHome;
