import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import {setContent} from '../Redux/contentReducer/content.action'
import './TitleContent.scss'
import axios from 'axios';
import SingleContent from './SingleContent/SingleContent';

function TitleContent({setContent, content}) {
    let find = 'find'
    const [contents , setContents ] = useState(null);
    const [resId , setResId] = useState();
    const [query, setQuery] = useState(null);

    useEffect(()=>{
        setResId(content.content.content) 
    })


   //Find id
    useEffect(()=>{
        axios.post('http://localhost:5000/find', {_id:resId})
        .then((res) => setContents(...res.data))
        findComponentHandler(resId, find)
    },[resId])



    //Post content
    const createComponentHandler = async (title_id) => {

        //If find exist query else post
        
        

       try {
        const create = await axios.post('http://localhost:5000/content', {title_id});
        const finds = await findComponentHandler(title_id, find);
       } catch (error) {
        alert(error)   
       }

    }

    //Find title content
    const findComponentHandler = async (title_id, find) => {
        const query = await axios.post('http://localhost:5000/content', {title_id, find});
        const data = await query.data;
        setQuery(data)
        console.log(data);
    }


    console.log(query);

    //print content
    const contentHandler = () => {

        if(contents) {
            
            return <div className="content-container">
            <button onClick={()=>{createComponentHandler(contents._id)}}>Create Component</button>
                {query ? query.map((query)=><SingleContent query={query} />) : <h1>NONE</h1>}
            </div> 
            
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
