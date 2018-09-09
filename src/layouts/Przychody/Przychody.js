import React from 'react';

import { decreaseIncome, increaseIncome } from '../../actions';

export class Przychody extends React.Component {
    decreaseIncome = () => {
        this.props.dispatch(decreaseIncome(5));
    };

    increaseIncome = () => {
        this.props.dispatch(increaseIncome(10));
    };

    render() {
        return (
            <div>
                Tutaj będą przychody
                <button onClick={ this.increaseIncome }>Zwiększ o 10!</button>
                <button onClick={ this.decreaseIncome }>Zmniejsz o 5!</button>
            </div>
        )
    }
};
