import React from 'react';
import Header from '../Header/Header';
import Titles from '../Titles/Titles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TitleContent from '../TitleContent/TitleContent';
import './Main.scss'

const Main = () => {


    return (
        <div className="main-container">
             <BrowserRouter>
            <Header className='header'/>
            <Titles className='titles'/>
             <Route path='/:id' component={TitleContent}/>
            </BrowserRouter>
        </div>
    )
    
}

export default Main