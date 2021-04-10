import { COMMENT_REQUEST, GET_COMMENT_SUCCESS, ADD_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS, COMMENT_FAILURE, COMMENTS_INIT } from "../actionTypes";

const initialState = {
    comments: [],
    loading: false,
    error: ""
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_REQUEST:
            return { ...state, loading: true };
        case GET_COMMENT_SUCCESS: {
            return { ...state, loading: false, error: "", comments: action.comments };
        }
        case ADD_COMMENT_SUCCESS: {
            let commentsCopy = [...state.comments];
            commentsCopy.push(action.comment);
            return { ...state, loading: false, error: "", comments: commentsCopy };
        }
        case DELETE_COMMENT_SUCCESS: {
            let commentsCopy = [...state.comments];
            const index = commentsCopy.findIndex(item => item.id === action.id);
            if (index >= 0)
                commentsCopy.splice(index, 1);
            return { ...state, loading: false, error: "", comments: commentsCopy };
        }
        case COMMENT_FAILURE:
            return { ...state, loading: false, error: action.error };
        case COMMENTS_INIT:
            return { ...initialState };
        default:
            return state;
    }
};

export default commentsReducer;