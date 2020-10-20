import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../services/api'
import Loading from './Loading';
import {
  fetchGetProductsFromCategoryAndQuery,
  inputCategoyId,
  cancelRequest,
} from '../actions';


class AsideCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({
          categories,
          isLoading: false,
        })
      })
  }

  onChangeSearchCategoryId(event) {
    const { fetchGetProductsFromCategoryAndQuery, inputsValues, inputCategoyId, resServer, data } = this.props;
    const categoryIdValue = event.target.value;
    const queryValue = inputsValues.queryValue.replace(/\s/g, '');
    console.log(queryValue)
    inputCategoyId(categoryIdValue);
    if (resServer && data.results.length === 0) {
      fetchGetProductsFromCategoryAndQuery(categoryIdValue, '');
    } else {
      fetchGetProductsFromCategoryAndQuery(categoryIdValue, queryValue);
    }
  }

  consoleTest() {
    const { requestData } = this.props;
    console.log(requestData)
  }

  render() {

    const { isLoading, categories } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div>
        <input
          type="radio"
          id="input-empty"
          name="categorieItem"
          value=""
          onChange={(e) =>
            this.onChangeSearchCategoryId(e)} />
        <label htmlFor="input-empty">Sem categoria</label>
        {categories.map((categorie) =>
          <div key={categorie.id}>
            <input
              type="radio"
              id={categorie.id}
              name="categorieItem"
              value={categorie.id}
              onChange={(e) =>
                this.onChangeSearchCategoryId(e)} />
            <label htmlFor={categorie.id}>{categorie.name}</label>
          </div>
        )}
        <button onClick={() => this.consoleTest()}>Teste</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputsValues: state.inputsValues,
  requestData: state.requestData,
  isFetching: state.requestData.isFetching,
  data: state.requestData.data,
  resServer: state.requestData.resServer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetProductsFromCategoryAndQuery: (categoryId, query) => (dispatch(fetchGetProductsFromCategoryAndQuery(categoryId, query))),
  inputCategoyId: (value) => (dispatch(inputCategoyId(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideCategories);
