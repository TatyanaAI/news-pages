import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AddNewsForm from '../../components/AddNewsForm/addNewsForm';
import { addNews } from '../../store/actions/addNewsActions';
import BackDrop from '../../components/UI/BackDrop/backDrop';
import './addNewsContainer.css';

const AddNewsContainer = () => {
    const [news, setNews] = useState({
        title: "",
        content: "",
        image: ""
    });

    const inputChangeHandler = event => {
        const { name, value } = event.target;
        setNews(prev => {
            return { ...prev, [name]: value };
        })
    }

    const { sent, loading, error } = useSelector(state => state.addNews);

    const dispatch = useDispatch();

    const fileChangeHandler = e => {
        const file = e.target.files[0];
        setNews(prevState => {
            return {
                ...prevState,
                image: file
            };
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(news).forEach(key => {
            formData.append(key, news[key]);
        });

        dispatch(addNews(formData));
    };

    return (
        <div className="AddNewsContainer">
            {sent ? <Redirect to="/" /> : null}
            <BackDrop loading={loading} />
            <AddNewsForm
                title={news.title}
                content={news.content}
                image="image"
                onFormSubmit={formSubmitHandler}
                onFileChange={fileChangeHandler}
                onInputChange={inputChangeHandler}
                error={error}
            />
        </div>
    )
}

export default AddNewsContainer;