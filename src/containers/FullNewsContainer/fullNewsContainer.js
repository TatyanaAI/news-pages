import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import dateFormat from 'dateformat';
import BackDrop from '../../components/UI/BackDrop/backDrop';
import CommentsContainer from '../CommentsContainer/commentsContainer';
import { getNews } from '../../store/actions/fullNewsActions';
import config from "../../config";
import './fullNewsContainer.css';

const FullNewsContainer = props => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const { news, loading } = useSelector(state => state.fullNews);

    useEffect(() => {
        dispatch(getNews(id));
    }, [dispatch, id]);

    return (
        <>
            <BackDrop loading={loading} />
            <div className="FullNewsContainer">
                {news.image ? <img src={config.apiUrl + "/uploads/" + news.image} alt="fullNewsImage" className="fullNewsImage" /> : ""}
                <div className="fullNewsInfoWrapper">
                    <h2 className="fullNewsTitle">{news.title}</h2>
                    <div className="fullNewsDatatime">{dateFormat(news.datetime, "dd.mm.yyyy HH:MM")}</div>
                    <div className="fullNewsContent">{news.content}</div>
                </div>

            </div>
            <CommentsContainer />
        </>
    )
}

export default FullNewsContainer;