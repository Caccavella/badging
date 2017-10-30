import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './components/mainpage/mainpage';
import Dashboard from './components/dashboard/dashboard';
import CreateNote from './components/create-note/create-note';
import SingleNote from './components/SingleNote/SingleNote';

export default (
<Switch>
    <Route exact path='/' component={Mainpage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/create-note" component={CreateNote}/>
    <Route path="/note/:id" component={SingleNote} />
    <Route render={() => {
        return(<div>Page Not Found</div>)
    }} />
</Switch>

)