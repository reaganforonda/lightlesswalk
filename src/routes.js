import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import MainPage from './Components/Main/MainPage';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/main' component={MainPage}/>
    </Switch>
)

