import React from 'react';
import {useState, useRef, useEffect} from 'react';
import TitleContent from '../TitleContent/TitleContent';
import Title from './Title/Title';
import {setContent} from '../Redux/contentReducer/content.action'
import {NavLink, BrowserRouter, Route, useHistory} from 'react-router-dom';
import {fetchPosts} from '../Redux/actions/routerAction';
import { connect } from 'react-redux';
import axios from 'axios';
import './Titles.scss';



function Titles({setContent, pageId}) {

    let history = useHistory()
    let pageID =  pageId.page.pageId;
    const titlePath = history.location.pathname;

    const urlHandler = () => {

        if(pageID  === null) {
            pageID = titlePath.replace('/', '')
    
            if(titlePath.length > 26) {
               pageID = titlePath.slice(0 , titlePath.lastIndexOf('/')).replace('/', '')
            }
    
        }else{
            pageID =  pageId.page.pageId;
        }

    }

    urlHandler()

    const titleFetchHandler = () => {
        
        
        axios.get(`http://localhost:5000/title?pageID=${pageID}`)
            .then((res) => setTitle(res.data))
    }
    useEffect(()=>{
        titleFetchHandler()
    }, [])

    


    const titlePostHandler = async (title) => {

       const post = await axios.post('http://localhost:5000/title', {title, pageID})
       titleFetchHandler()

    }


    const [title, setTitle] = useState([])
    //Title input value
    const titleValue = useRef(null);

    const titleDeleteOneHandler = (id) => {

        const deleteOne = title.filter((a) => a._id !== id)
        setTitle(deleteOne);
        history.push('/');
       

    }


    const printTitle = () => {
        return (
            <div className="title-content-holder">
            <div className="titles-holder">
            { title.map((titles)=>(<NavLink onClick={()=>{setContent(titles._id)}} to={`/${pageID}/`+titles._id}><Title  titleDeleteOneHandler={titleDeleteOneHandler} key={Math.random()*999} titles={titles} /></NavLink>))}
            </div>
            </div>
        )
    }


    
    return (
        <section className="titles-container titles">
        <input ref={titleValue} type="text" className="titles-input"/>
            <button onClick={()=>{if(titleValue.current.value !== ''){titlePostHandler(titleValue.current.value)}}}>ADD</button>
        {title.length !== 0 ? printTitle(): <h1 style={{textAlign:'center'}}>NO TITLE</h1>}
        
        </section>
    )
}


   
const mapStateToProps = state => ({
    pageId: state

})
  


  const mapDispatchToProps = dispatch => ({
    setContent: content => dispatch(setContent(content))
})


export default connect(mapStateToProps, mapDispatchToProps)(Titles)
