import { ADD_NEWS_REQUEST, ADD_NEWS_SUCCESS, ADD_NEWS_FAILURE, ADD_NEWS_INIT } from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  sent: false
};

const addNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS_REQUEST:
      return { ...state, loading: true };
    case ADD_NEWS_SUCCESS:
      return { ...state, loading: false, sent: true };
    case ADD_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ADD_NEWS_INIT:
      return { ...initialState };
    default:
      return state;
  }
};

export default addNewsReducer;