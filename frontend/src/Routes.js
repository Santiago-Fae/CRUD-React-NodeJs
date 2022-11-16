import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Client from './pages/client';
import City from './pages/city';

export default () => {
    return (
        <Routes>    
            <Route path="/" exact element={<Home />} />  
            <Route path="/cidade/:id" exact element={<City />} />  
            <Route path="/cliente/:id" exact element={<Client />} />  
        </Routes>
    )
}