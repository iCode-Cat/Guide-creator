import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import {setContent} from '../Redux/contentReducer/content.action'
import './TitleContent.scss'
import axios from 'axios';

function TitleContent({setContent, content}) {

    const [contents , setContents ] = useState(null);
    const [resId , setResId] = useState();

    useEffect(()=>{
        setResId(content.content.content)
    })
   console.log(resId);
    useEffect(()=>{
        axios.post('http://localhost:5000/find', {_id:resId})
        .then((res) => setContents(...res.data))
    },[resId])
    console.log(contents)


    //print content
    const contentHandler = () => {

        if(contents) {
            return contents !== undefined ? <h1>{contents._id}</h1>:'NONE CONTENT'
        }
        
    }

    return (
        <div className="title-content-container">
           {/* {content ? content[0].title : 'NONE'} */}
            {contentHandler() }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setContent: content => dispatch(setContent(content))
})

const mapStateToProps = state => ({
    content: state

})

export default connect(mapStateToProps, mapDispatchToProps)(TitleContent)
