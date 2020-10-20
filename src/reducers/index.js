import { combineReducers } from 'redux';
import {
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_FAIL,
  INPUT_QUERY,
  INPUT_CATEGORYID,
  CANCEL_REQUEST
} from '../actions';

const stateDefault = {
  isFetching: false,
  data: [],
  resServer: false,
};

const requestData = (state = stateDefault, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        resServer: true,
      };
    case CANCEL_REQUEST:
      return {
        ...state,
        resServer: false,
      };
    case RECEIVE_FAIL:
      return {
        ...state,
        error: action.error,
        resServer: false,
      };
    default:
      return state;
  }
};

const stateInputsValues = {
  queryValue: '',
  categoryIdValue: ''
};

const inputsValues = (state = stateInputsValues, action) => {
  switch (action.type) {
    case INPUT_QUERY:
      return {
        ...state,
        queryValue: action.queryValue,
      };
    case INPUT_CATEGORYID:
      return {
        ...state,
        categoryIdValue: action.categoryIdValue,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ requestData, inputsValues });

export default rootReducer;
