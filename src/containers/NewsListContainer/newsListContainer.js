import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import dateFormat from 'dateformat';
import News from '../../components/News/news';
import BackDrop from '../../components/UI/BackDrop/backDrop';
import { getNews, deleteNews } from '../../store/actions/newsActions';
import { addNewsInit } from '../../store/actions/addNewsActions';
import { fullNewsInit } from '../../store/actions/fullNewsActions';
import './newsListContainer.css';

const NewsListContainer = () => {
    const dispatch = useDispatch();
    const { news, loading } = useSelector(state => state.news);

    useEffect(() => {
        dispatch(getNews());
        dispatch(addNewsInit());
        dispatch(fullNewsInit());
    }, [dispatch]);

    const newsList = news.map((news) => {
        return <News
            key={news.id}
            id={news.id}
            title={news.title}
            image={news.image}
            datetime={dateFormat(news.datetime, "dd.mm.yyyy HH:MM")}
            onDelete={() => { dispatch(deleteNews(news.id)) }}
        />
    })

    return (
        <>
            <BackDrop loading={loading} />
            <div className="NewsListContainer" >
                {newsList}
            </div>
        </>
    )
}

export default NewsListContainer;