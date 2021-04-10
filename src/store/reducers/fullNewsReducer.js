import { GET_FULL_NEWS_REQUEST, GET_FULL_NEWS_SUCCESS, GET_FULL_NEWS_FAILURE, FULL_NEWS_INIT } from "../actionTypes";

export const initialState = {
  news: {}
};

const fullNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FULL_NEWS_REQUEST:
      return { ...state, loading: true };
    case GET_FULL_NEWS_SUCCESS: {
      return { ...state, loading: false, error: "", news: action.news };
    }
    case GET_FULL_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case FULL_NEWS_INIT:
      return { ...initialState };
    default:
      return state;
  }
};

export default fullNewsReducer;
