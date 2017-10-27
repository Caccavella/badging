import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './components/mainpage/mainpage';
import Dashboard from './components/dashboard/dashboard';

export default (

<Switch>
    <Route exact path='/' component={Mainpage} />
    <Route path="/dashboard" component={Dashboard} />
</Switch>

)