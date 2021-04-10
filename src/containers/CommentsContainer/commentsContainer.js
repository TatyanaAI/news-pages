import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// import SendMessageForm from '../../components/AddNewsForm/sendMessageForm';
import { getComments, deleteComment } from '../../store/actions/commentsActions';

import BackDrop from '../../components/UI/BackDrop/backDrop';
import Comment from '../../components/Comment/comment';
import AddCommentContainer from '../AddCommentContainer/addCommentContainer';

import './commentsContainer.css';

const CommentsContainer = () => {
    const newsId = useSelector(state => state.fullNews.news.id);
    const dispatch = useDispatch();
    const { comments, loading } = useSelector(state => state.comments);

    useEffect(() => {
        if (newsId)
            dispatch(getComments(newsId));
    }, [dispatch, newsId]);

    const commentsList = comments.map((comment) => {
        return <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            text={comment.text}
            onDelete={() => { dispatch(deleteComment(comment.id)) }}
        />
    })

    return (
        <>
            <BackDrop loading={loading} />
            {commentsList}
            <AddCommentContainer />
        </>
    )
}

export default CommentsContainer;