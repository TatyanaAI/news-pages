import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addComment } from '../../store/actions/commentsActions';
import BackDrop from '../../components/UI/BackDrop/backDrop';
import Button from '../../components/UI/Button/button';
import './addCommentContainer.css';

const AddCommentContainer = () => {
    const newsId = useSelector(state => state.fullNews.news.id);
    const [comment, setComment] = useState({
        author: "",
        text: ""
    });

    const inputChangeHandler = event => {
        const { name, value } = event.target;
        setComment(prev => {
            return { ...prev, [name]: value };
        })
    }

    const { loading, error } = useSelector(state => state.comments);

    const dispatch = useDispatch();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addComment({ ...comment, newsId }));
        setComment({
            author: "",
            text: ""
        })
    };

    return (
        <>
            <BackDrop loading={loading} />
            <form onSubmit={formSubmitHandler} className="AddCommentForm">
                <label>
                    Author
                <input type="text"
                        name="author"
                        className="AddCommentAuthor"
                        placeholder='Enter your name'
                        value={comment.author}
                        onChange={inputChangeHandler} />
                </label>

                <label>
                    Comment
                <textarea name="text"
                        className="AddCommentText"
                        rows="2"
                        placeholder='Enter your comment'
                        value={comment.text}
                        onChange={inputChangeHandler} ></textarea>
                </label>
                <Button label="Send"
                    className={["primary"]}
                />
                <div className="error" style={{ display: error ? 'block' : 'none' }}>{error}</div>
            </form>
        </>
    )
}

export default AddCommentContainer;