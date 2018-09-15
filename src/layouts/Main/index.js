import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Navigation } from "../../Components/Navigation";
import { Header } from "../../Components/Header";
import routes from "../../routes";
import {ChooseCategory} from "../KategorieWydatki/KategorieWydatki";

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
            <Route path='/spendingsCategory' component={ ChooseCategory }/>
        </div>
    )
};

//<Route path={`${match.url}/przychody`} component={Przychody}/>
//<Route path={`${match.url}/wydatki`} component={Wydatki}/>
