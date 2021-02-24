import React from 'react';
import Header from '../Header/Header';
import Titles from '../Titles/Titles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TitleContent from '../TitleContent/TitleContent';

const Main = () => {


    return (
        <div className="main-container">
             <BrowserRouter>
            <Header/>
            <Titles/>
             <Route path='/:id' component={TitleContent}/>
            </BrowserRouter>
        </div>
    )
    
}

export default Main