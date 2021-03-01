import React from 'react'
import {useHistory} from 'react-router-dom';

function CreatedPages({pages}) {


    let history = useHistory();

    const {page_name, username, _id} = pages;

    const alerts = (id) => {

        alert(id)
        history.push('/main')

    }

    return (
        <div className="created-page-container add-box">
            <h1 onClick={()=>{alerts(_id)}}>{page_name}</h1>
        </div>
    )
}

export default CreatedPages
