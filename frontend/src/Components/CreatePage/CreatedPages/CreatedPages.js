import React from 'react'
import {useHistory} from 'react-router-dom';

function CreatedPages({pages}) {


    let history = useHistory();

    const {page_name, username, _id} = pages;


    return (
        <div className="created-page-container add-box">
            <h1>{page_name}</h1>
        </div>
    )
}

export default CreatedPages
