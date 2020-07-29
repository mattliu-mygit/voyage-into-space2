import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import JsxParser from 'react-jsx-parser';
import { toast } from 'react-toastify';
const collegeHelp = require('../api/collegehelpsApi');
const diy = require('../api/diyApi');
const homeschoolingandchildcare = require('../api/homeschoolingandchildcareApi');
const maryland911alternatives = require('../api/maryland911alternativesAPI');
const mentalandemotional = require('../api/mentalandemotionalApi');
const racismhatecrimes = require('../api/racismhatecrimesApi');
const resourceinsecurities = require('../api/resourceinsecuritiesApi');
const unstableIncome = require('../api/unstableIncomeApi');

const SearchList = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      generateData();
    }
    setSearchResults([]);
    find();
  }, [props.searchterm]);

  const find = () => {
    let aggregate = [];
    if (props.searchterm !== '') {
      for (let i = 0; i < data.length; i++) {
        const title = data[i].main_title.toLowerCase();
        const content = data[i].main_content.toLowerCase();
        if (
          title.includes(props.searchterm.toLowerCase()) ||
          content.includes(props.searchterm.toLowerCase())
        ) {
          aggregate.push(data[i]);
        }
      }
      if (aggregate.length > 0) {
        toast.info(
          'Found ' + aggregate.length + ' results in our database! :)'
        );
      } else if (data.length > 0) {
        toast.error(
          'Found ' + aggregate.length + ' results in our database! :('
        );
      }
    }
    setSearchResults(aggregate);
  };

  const generateData = async () => {
    let aggregate = [];
    await collegeHelp.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await diy.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await homeschoolingandchildcare.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await maryland911alternatives.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await mentalandemotional.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await racismhatecrimes.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await resourceinsecurities.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    await unstableIncome.getData().then((out) => {
      aggregate = [...aggregate, ...out];
    });
    setData(aggregate);
  };

  return (
    <div className="search-results">
      {searchResults.map((_data) => (
        <MenuItem
          id={_data._id}
          searchterm={props.searchterm}
          title={_data.main_title}
          content={<JsxParser jsx={_data.main_content} />}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    searchterm: state.searchterm,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
