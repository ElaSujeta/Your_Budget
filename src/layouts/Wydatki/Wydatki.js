import React, {Component} from 'react';
import {
    Route
} from 'react-router-dom';

import './wydatki.css'
import {decreaseSpendings, increaseSpendings} from "../../actions";
import {AddButton} from "../../Components/Button";
import { ChooseCategory} from "../KategorieWydatki/KategorieWydatki";


export class Wydatki extends Component {

    decreaseSpendings = () => {
        this.props.dispatch(decreaseSpendings(5));
    };

    increaseSpendings = () => {
        this.props.dispatch(increaseSpendings(10));
    };

    addCategory = () => {
        <div>

        </div>

    };

    render() {
        return (
            <div>
                <AddButton onClick={ this.addCategory }> </AddButton>

                <button onClick={ this.increaseSpendings }>Zwiększ o 10!</button>
                <button onClick={ this.decreaseSpendings }>Zmniejsz o 5!</button>
            </div>
        )
    }
}