import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGetProductsFromCategoryAndQuery, inputQuery } from '../actions';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
      searchInputValueEmptyMsg: '',
    };
  }

  onChangeSearchInputValue = (event) => {
    this.setState({ searchInputValue: event.target.value })
  }

  onKeyPressSearch = (event) => {
    const { fetchGetProductsFromCategoryAndQuery, inputsValues, inputQuery } = this.props;
    const categoryIdValue = inputsValues.categoryIdValue;
    const queryValue = event.target.value.replace(/\s/g, '');
    if (event.keyCode === 13 && queryValue) {
      inputQuery(queryValue);
      fetchGetProductsFromCategoryAndQuery(categoryIdValue, queryValue);
    }
  }

  onClickSearch = (value) => {
    const { fetchGetProductsFromCategoryAndQuery, inputsValues, inputQuery } = this.props;
    const categoryIdValue = inputsValues.categoryIdValue;
    const queryValue = value.replace(/\s/g, '');
    inputQuery(value);
    if (queryValue) {
      fetchGetProductsFromCategoryAndQuery(categoryIdValue, queryValue);
    }
  }

  render() {
    const { searchInputValue, searchInputValueEmptyMsg } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchInputValue}
          onChange={(e) => this.onChangeSearchInputValue(e)}
          onKeyUp={(e) => this.onKeyPressSearch(e)}
        />
        <button onClick={() => this.onClickSearch(searchInputValue)}>Lupa</button>
        {searchInputValueEmptyMsg && <p>{searchInputValueEmptyMsg}</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputsValues: state.inputsValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetProductsFromCategoryAndQuery: (categoryId, query) => (dispatch(fetchGetProductsFromCategoryAndQuery(categoryId, query))),
  inputQuery: (value) => (dispatch(inputQuery(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
