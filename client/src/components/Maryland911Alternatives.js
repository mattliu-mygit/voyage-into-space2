import React from 'react';
import Collapsible from './Collapsible';
import { getData } from '../api/maryland911alternativesAPI';
import JsxParser from 'react-jsx-parser';
import * as searchActions from '../redux/actions/marylandSearchActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';

class Maryland911Alternatives extends React.Component {
  state = { searchterm: '', MarylandAlternatives: [], filtered: [] };

  componentDidMount() {
    getData().then((data) => {
      this.setState({ MarylandAlternatives: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.marylandSearchterm !== this.props.marylandSearchterm) {
      this.find();
    }
  }

  find() {
    let aggregate = [];
    if (this.props.marylandSearchterm !== '') {
      for (let i = 0; i < this.state.MarylandAlternatives.length; i++) {
        const title = this.state.MarylandAlternatives[
          i
        ].main_title.toLowerCase();
        const content = this.state.MarylandAlternatives[
          i
        ].main_content.toLowerCase();
        if (
          title.includes(this.props.marylandSearchterm.toLowerCase()) ||
          content.includes(this.props.marylandSearchterm.toLowerCase())
        ) {
          aggregate.push(this.state.MarylandAlternatives[i]);
        }
      }
      if (aggregate.length > 0) {
        toast.info(
          'Found ' + aggregate.length + ' results in our database! :)'
        );
      } else if (this.state.MarylandAlternatives.length > 0) {
        toast.error(
          'Found ' + aggregate.length + ' results in our database! :('
        );
      }
    }
    this.setState({ filtered: aggregate });
  }

  doSearch = debounce(() => {
    this.props.actions.setMarylandSearchterm(this.state.searchterm);
  }, 500);

  handleChange = (event) => {
    this.setState({ searchterm: event.target.value });
    this.doSearch();
  };

  render() {
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
          <h1>Maryland Alternatives to Calling 911</h1>
        </div>
        <div
          className="main-content"
          style={{
            display: 'inline-block',
            width: '33.5%',
            fontSize: '1.25rem',
            marginTop: '0.5rem',
            marginRight: '0rem',
            borderTopRightRadius: '0rem',
            borderBottomRightRadius: '5px',
            minWidth: '13rem',
          }}
        >
          <p>
            This is a collection of different numbers to find help. To quickly
            find what you need, use the search function below.
            <p>
              <input
                style={{ marginTop: '1rem', marginLeft: '0rem', width: '100%' }}
                placeholder="Search for a number here!"
                value={this.state.searchterm}
                className="form-control searchbar"
                type="search"
                onChange={this.handleChange}
              />
            </p>
          </p>
        </div>
        <div
          className="main-content covid-content"
          style={{
            width: '61.5%',
            marginTop: '0.5rem',
            paddingTop: '0.25rem',
            minHeight: '12.75rem',
            marginLeft: '0rem',
            minWidth: '31.75rem',
            position: 'absolute',
            borderTopLeftRadius: '0rem',
            borderBottomLeftRadius: '0px',
          }}
        >
          {this.state.searchterm === ''
            ? this.state.MarylandAlternatives.map((data) => (
                <Collapsible
                  title={data.main_title}
                  content={<JsxParser jsx={data.main_content} />}
                />
              ))
            : this.state.filtered.map((data) => (
                <Collapsible
                  title={data.main_title}
                  content={<JsxParser jsx={data.main_content} />}
                />
              ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    marylandSearchterm: state.marylandSearchterm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setMarylandSearchterm: bindActionCreators(
        searchActions.setMarylandSearchterm,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maryland911Alternatives);
