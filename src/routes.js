import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Repositories from './pages/Agradecimento';
import Home from './pages/Home';

export default function Routes() { //Exact para deixar exatamente a Barra
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}