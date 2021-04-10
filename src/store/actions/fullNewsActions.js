import { GET_FULL_NEWS_REQUEST, GET_FULL_NEWS_SUCCESS, GET_FULL_NEWS_FAILURE, FULL_NEWS_INIT } from "../actionTypes";
import axios from '../../axios-api'

const fullNewsRequest = () => {
  return { type: GET_FULL_NEWS_REQUEST };
};

const getFullNewsSuccess = news => {
  return { type: GET_FULL_NEWS_SUCCESS, news };
};

const fullNewsFailure = error => {
  return { type: GET_FULL_NEWS_FAILURE, error };
};

export const fullNewsInit = () => {
  return { type: FULL_NEWS_INIT };
};

export const getNews = (id) => {
  return async dispatch => {
    try {
      dispatch(fullNewsRequest());
      const response = await axios.get("/news/" + id);
      dispatch(getFullNewsSuccess(response.data));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(fullNewsFailure(e.response.data.error));
    }
  };
};