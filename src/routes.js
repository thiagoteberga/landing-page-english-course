import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Agradecimento from './pages/Agradecimento';
import Home from './pages/Home';

export default function Routes() { //Exact para deixar exatamente a Barra
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/agradecimento' component={Agradecimento}/>
            </Switch>
        </BrowserRouter>
    )
}