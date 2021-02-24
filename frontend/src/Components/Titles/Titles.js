import React from 'react';
import {useState, useRef, useEffect} from 'react';
import TitleContent from '../TitleContent/TitleContent';
import Title from './Title/Title';
import {setContent} from '../Redux/contentReducer/content.action'
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import {fetchPosts} from '../Redux/actions/routerAction';
import { connect } from 'react-redux';
import axios from 'axios';
import './Titles.scss';
function Titles({setContent}) {



    useEffect(()=>{

        axios.get('http://localhost:5000/title')
        .then((res) => setTitle(res.data))
        

    }, [])
    const [title, setTitle] = useState([])
    //Title input value
    const titleValue = useRef(null);

    const printTitle = () => {
        return (
            <div className="title-content-holder">
            <div className="titles-holder">
            { title.map((titles)=>(<NavLink onClick={()=>{setContent(titles._id)}} to={titles._id}><Title key={Math.random()*999} titles={titles} /></NavLink>))}
            </div>
            </div>
        )
    }

    return (
        <section className="titles-container">
        <input ref={titleValue} type="text" className="titles-input"/>
            <button onClick={()=>{setTitle([...title, titleValue.current.value])}}>ADD</button>
        {title.length !== 0 ? printTitle(): 'NO CONTENT'}
        
        </section>
    )
}


   
  

  const mapDispatchToProps = dispatch => ({
    setContent: content => dispatch(setContent(content))
})


export default connect(null, mapDispatchToProps)(Titles)
