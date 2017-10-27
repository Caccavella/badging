import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './components/mainpage/mainpage';
import Dashboard from './components/dashboard/dashboard';
import CreateNote from './components/create-note/create-note';

export default (

<Switch>
    <Route exact path='/' component={Mainpage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/create-note" component={CreateNote}/>
</Switch>

)