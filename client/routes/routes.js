import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../containers/App';
import ManualProcess from "../containers/manualProcess";
import AutoProcess from "../containers/autoProcess";

export default () => {
}
return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/autoProcess' component={AutoProcess}/>
            <Route path='/manualProcess' component={ManualProcess}/>
        </Switch>
    </BrowserRouter>
);
