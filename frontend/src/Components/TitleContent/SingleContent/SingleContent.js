import React from 'react'
import './SingleContent.scss';

function SingleContent({query}) {
    return (
        <div className="single-content-container">
            <div className="single-content">
            <h1>{query.toggle_title}</h1>
            <p>{query.content}</p>
            </div>
        </div>
    )
}

export default SingleContent
