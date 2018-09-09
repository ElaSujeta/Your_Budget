import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    HashRouter,
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import {Main} from "./layouts/Main/";

class App extends Component {
    render() {
        return(
            <HashRouter>
                <Route path='/' component={Main}/>
            </HashRouter>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
