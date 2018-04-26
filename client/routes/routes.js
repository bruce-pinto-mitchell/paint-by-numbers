import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../containers/App';
import ManualProcess from "../containers/manualProcess";
import AutoProcess from "../containers/autoProcess";

export default () => {

    const images = [],
        imageSrcPrefix = '../../images/project/';

    for (let i = 1; i < 391; i++) {
        images.push({
            name: `${i}.jpg`,
            src: `${imageSrcPrefix}i.jpg`
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/autoProcess' render={() =><AutoProcess images={images}/>}/>
                <Route path='/manualProcess' render={() =><ManualProcess images={images}/>}/>
            </Switch>
        </BrowserRouter>
    );
}