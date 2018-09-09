import React, {Component} from 'react';

import './wydatki.css'

export class Wydatki extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonLabel: '+',
        };
    }

    addCategory = () => {
        console.log('Przycisk do dodania kategorii wydatku kliknięty!');
        this.setState({
            buttonLabel: 'Dodaj',
        });
    };

    render() {
        return (
            <div>
                <div>tutaj będą wydatki</div>
                <button className= 'button-add' onClick={ this.addCategory }>{ this.state.buttonLabel }</button>
            </div>
        )
    }
}