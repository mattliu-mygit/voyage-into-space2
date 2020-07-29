import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../redux/actions/searchActions';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  doSearch = debounce(() => {
    this.props.actions.setSearchterm(this.state.searchTerm);
  }, 500);

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  render() {
    return (
      <div>
        <div className="search-description">
          <input
            className="form-control searchbar"
            type="search"
            value={this.state.searchterm}
            placeholder="Search for info here! (ie. Maryland)"
            onChange={this.handleSearch}
          ></input>
          <h4 className="search-prompt"> ⌕ Search Information!</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setSearchterm: bindActionCreators(searchActions.setSearchterm, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
