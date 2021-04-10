import { ADD_NEWS_REQUEST, ADD_NEWS_SUCCESS, ADD_NEWS_FAILURE, ADD_NEWS_INIT } from "../actionTypes";
import axios from '../../axios-api'

const addNewsRequest = () => {
  return { type: ADD_NEWS_REQUEST };
};

const addNewsSuccess = () => {
  return { type: ADD_NEWS_SUCCESS };
};

const addNewsFailure = error => {
  return { type: ADD_NEWS_FAILURE, error };
};

export const addNewsInit = () => {
  return { type: ADD_NEWS_INIT };
};

export const addNews = news => {
  return async dispatch => {
    try {
      dispatch(addNewsRequest());
      await axios.post("/news", news);
      dispatch(addNewsSuccess());
    } catch (e) {
      console.error(e.response.data.error);
      dispatch(addNewsFailure(e.response.data.error));
    }
  };
};
