import React from 'react';
import Button from '../UI/Button/button';
import FileInput from '../UI/Form/fileInput';
import './addNewsForm.css';

const AddNewsForm = (props) => {
    return (
        <form onSubmit={props.onFormSubmit} className="AddNewsForm">
            <label>
                Title
                <input type="text"
                    name="title"
                    className="addNewsTitle"
                    placeholder='Enter news title'
                    value={props.title}
                    onChange={props.onInputChange} />
            </label>

            <label>
                Content
                <textarea name="content"
                    className="addNewsContent"
                    rows="2"
                    placeholder='Enter news content'
                    value={props.content}
                    onChange={props.onInputChange} ></textarea>
            </label>

            <FileInput
                label="Image"
                name={props.image}
                onChange={props.onFileChange}
            />

            <Button label="Add news"
                className={["primary"]}
            />

            <div className="error" style={{ display: props.error ? 'block' : 'none' }}>{props.error}</div>
        </form>)
}

export default AddNewsForm;