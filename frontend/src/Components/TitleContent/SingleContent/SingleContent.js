import React, {useRef, useState} from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './SingleContent.scss';
import '../../Global Styling/Hover.scss'

function SingleContent({query, alerts}) {

    //Conditional Hover
    const [hover , setHover] = useState(false);

const title = useRef();
const content = useRef();    

    //Delete content
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


     //Update contents
     const updateHandler = async (_id, title, content) => {
        try {
            const put =  axios.put('http://localhost:5000/content',{_id, title, content})
            .then(()=>{alert('UPDATED!')})
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div className="single-content-container" onMouseMove={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
            <div className="single-content">
            <div className="single-content-title-holder">
            <h1 contentEditable ref={title} onClick={(e)=>{console.log(e.target.innerHTML)}}>{query.toggle_title}</h1>
            <div className={`single-content-icons ${hover === true && 'hover'}`}>
            <i class="fas fa-save" onClick={()=>updateHandler(query._id, title.current.innerHTML, content.current.innerHTML)}></i>
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt" onClick={()=>{contentDeleteHandler(query._id);}}></i>
            </div>
            </div>
            <p contentEditable dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(query.content)}} ref={content}></p>
            </div>
        </div>
    )
}

export default SingleContent
