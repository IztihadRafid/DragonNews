import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const {_id, details, title, image_url, thumbnail_url } = singleNews
    return (
        <div className="card bg-base-100 mb-6 ">
            <figure>
                <img
                    src={image_url}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200
                     ? <p>{details.slice(0, 200)}<Link to={`/singleNews/${_id}`} className='font-bold text-blue-400' >Read More</Link></p>
                        : <p>{ details }</p>
                        }

            </div>
        </div>
    );
};

export default NewsCard;