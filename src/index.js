import moment from 'moment/moment';
import 'moment/locale/pl';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    Route,
    HashRouter,
} from 'react-router-dom';
import { createStore } from 'redux';

import { Main } from './layouts/Main/';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

moment.locale('pl');

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return(
            <Provider store={ store }>
                <HashRouter>
                    <Route path='/' component={ Main }/>
                </HashRouter>
            </Provider>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
