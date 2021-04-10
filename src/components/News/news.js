import React from 'react';
import { NavLink } from 'react-router-dom';
import config from "../../config";
import './news.css';

const News = (props) => {
    return (
        <div className="NewsWrapper" key={props.id}>
            {props.image ? <img src={config.apiUrl + "/uploads/" + props.image} alt="newsImage" className="newsImage" /> : ""}
            <div className="newsInfoWrapper">
                <h3 className="newsTitle">{props.title}</h3>
                <div className="newsAdditInfoWrapper">
                    <span className="newsDate">{props.datetime}</span>
                    <NavLink to={"news/" + props.id} className="newsShowFull">Show full news</NavLink>
                    <button onClick={props.onDelete} className="newsDelete">Delete</button>
                </div>
            </div>
        </div>)
}

export default News;