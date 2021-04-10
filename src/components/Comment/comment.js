import React from 'react';
import './comment.css';

const Comment = (props) => {
    return (
        <div className="CommentWrapper" key={props.id}>
            <div className="commentBody">
                <span className="commentAuthor">{props.author || "Anonymous"}</span>
                <b> wrote: </b>
                <span className="commentText">{props.text}</span>
            </div>
            <button onClick={props.onDelete} className="commentDeleteButton">Delete</button>
        </div>)
}

export default Comment;