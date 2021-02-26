import React from 'react';
import axios from 'axios';
import './SingleContent.scss';

function SingleContent({query, setQuery, alerts}) {

    

    const contentDeleteHandler = async (_id) => {

        const single = 'single'
        
        try {
            const deleteOne = await axios.delete('http://localhost:5000/content', {data:{single, _id}})
            //If responsonse 200, delete item on frontend as well.
            .then((result) => {alerts(_id)})
            
        } catch (error) {
            console.log(error);
        }
    
    }

    //Remove item on frontend
   const contentRemoveHandler = () => {

   


    }

    return (
        <div className="single-content-container">
            <div className="single-content">
            <div className="single-content-title-holder">
            <h1 contentEditable onClick={(e)=>{console.log(e.target.innerHTML)}}>{query.toggle_title}</h1>
            <div className="single-content-icons">
            <i class="fas fa-save"></i>
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt" onClick={()=>{contentDeleteHandler(query._id);}}></i>
            </div>
            </div>
            <p>{query.content}</p>
            </div>
        </div>
    )
}

export default SingleContent
