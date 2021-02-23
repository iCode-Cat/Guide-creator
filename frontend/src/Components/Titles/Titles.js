import React from 'react';
import {useState, useRef} from 'react';
import TitleContent from '../TitleContent/TitleContent';
import Title from './Title/Title';
import axios from 'axios';
import './Titles.scss';
function Titles() {

    const [title, setTitle] = useState([])
    console.log(title);
    //Title input value
    const titleValue = useRef(null);

    const printTitle = () => {
        return (
            <div className="title-content-holder">
            <div className="titles-holder">
            { title.map((titles)=>(<Title key={Math.random()*999} titles={titles} />))}
            </div>
            <TitleContent/>
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

export default Titles
