import { COMMENT_REQUEST, GET_COMMENT_SUCCESS, ADD_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS, COMMENT_FAILURE, COMMENTS_INIT } from "../actionTypes";
import axios from '../../axios-api'

const commentRequest = () => {
  return { type: COMMENT_REQUEST };
};

const getCommentsSuccess = comments => {
  return { type: GET_COMMENT_SUCCESS, comments };
};

const addCommentSuccess = comment => {
  return { type: ADD_COMMENT_SUCCESS, comment };
};

const deleteCommentSuccess = id => {
  return { type: DELETE_COMMENT_SUCCESS, id };
};

const commentFailure = error => {
  return { type: COMMENT_FAILURE, error };
};

export const commentsInit = () => {
  return { type: COMMENTS_INIT };
};

export const getComments = (newsId) => {
  return async dispatch => {
    try {
      dispatch(commentRequest());
      const response = await axios.get("/comments?news_id=" + newsId);
      dispatch(getCommentsSuccess(response.data.reverse()));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(commentFailure(e.response.data.error));
    }
  };
};

export const addComment = (comment) => {
  return async dispatch => {
    try {
      dispatch(commentRequest());
      const response = await axios.post("/comments", comment);
      dispatch(addCommentSuccess(response.data));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(commentFailure(e.response.data.error));
    }
  };
};

export const deleteComment = (id) => {
  return async dispatch => {
    try {
      dispatch(commentRequest());
      await axios.delete("/comments/" + id);
      dispatch(deleteCommentSuccess(id));
    } catch (e) {
      console.error(e.response.data.error)
      dispatch(commentFailure(e.response.data.error));
    }
  };
};