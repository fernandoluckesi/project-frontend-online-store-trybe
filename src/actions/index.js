import { getProductsFromCategoryAndQuery } from '../services/api';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_FAIL = 'RECEIVE_FAIL';
export const CANCEL_REQUEST = 'CANCEL_REQUEST';
export const INPUT_QUERY = 'INPUT_QUERY';
export const INPUT_CATEGORYID = 'INPUT_CATEGORYID';

export const inputQuery = (queryValue) => ({
  type: INPUT_QUERY,
  queryValue,
});

export const inputCategoyId = (categoryIdValue) => ({
  type: INPUT_CATEGORYID,
  categoryIdValue,
});

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

const receiveFail = (error) => ({
  type: RECEIVE_FAIL,
  error,
});

export const cancelRequest = () => ({
  type: CANCEL_REQUEST,
});

export function fetchGetProductsFromCategoryAndQuery(categoryId, query) {
  return (dispatch) => {
    dispatch(requestData());

    return getProductsFromCategoryAndQuery(categoryId, query)
      .then(
        ((data) => {
          dispatch(receiveData(data));
        }),
        (error) => dispatch(receiveFail(error.message)),
      );
  };
}
