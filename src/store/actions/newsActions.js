import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, GET_NEWS_FAILURE, DELETE_NEWS_REQUEST, DELETE_NEWS_FAILURE } from "../actionTypes";
import axios from '../../axios-api'

const newsRequest = () => {
  return { type: GET_NEWS_REQUEST };
};
const deleteNewsRequest = () => {
  return { type: DELETE_NEWS_REQUEST };
};

const getNewsSuccess = news => {
  return { type: GET_NEWS_SUCCESS, news };
};

const deleteNewsSuccess = id => {
  return { type: DELETE_NEWS_SUCCESS, id };
};

const newsFailure = error => {
  return { type: GET_NEWS_FAILURE, error };
};
const deleteNewsFailure = error => {
  return { type: DELETE_NEWS_FAILURE, error };
};

export const getNews = () => {
  return async dispatch => {
    try {
      dispatch(newsRequest());
      const response = await axios.get("/news");
      dispatch(getNewsSuccess(response.data.reverse()));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(newsFailure(e.response.data.error));
    }
  };
};

export const deleteNews = (id) => {
  return async dispatch => {
    try {
      dispatch(deleteNewsRequest());
      await axios.delete("/news/" + id);
      dispatch(deleteNewsSuccess(id));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(deleteNewsFailure(e.response.data.error));
    }
  };
};