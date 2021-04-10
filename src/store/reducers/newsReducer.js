import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, GET_NEWS_FAILURE, DELETE_NEWS_REQUEST, DELETE_NEWS_FAILURE } from "../actionTypes";

export const initialState = {
  news: [],
  loading: false,
  error: ""
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state, loading: true };
    case DELETE_NEWS_REQUEST:
      return { ...state, loading: true };
    case GET_NEWS_SUCCESS: {
      return { ...state, loading: false, error: "", news: action.news };
    }
    case DELETE_NEWS_SUCCESS: {
      let newsCopy = [...state.news];
      const index = newsCopy.findIndex(item => item.id === action.id);
      if (index >= 0)
        newsCopy.splice(index, 1);
      return { ...state, loading: false, error: "", news: newsCopy };
    }
    case GET_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DELETE_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default newsReducer;
