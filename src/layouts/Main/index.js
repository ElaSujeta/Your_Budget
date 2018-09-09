import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Navigation } from "../../components/Navigation";
import { Header } from "../../components/Header";
import routes from "../../routes";

export const Main = () => {
    const mappedRoutes = routes.map((route, index) => (
        <Route exact={route.exact} key={index} path={route.path} component={route.component}/>
    ));

    return (
        <div>
            <Header/>
            <Navigation/>
            <Switch>
                { mappedRoutes }
            </Switch>
        </div>
    )
};

//<Route path={`${match.url}/przychody`} component={Przychody}/>
//<Route path={`${match.url}/wydatki`} component={Wydatki}/>
