import React, {Component} from 'react';

import "./podsumowanie.css"

export const Podsumowanie = () => {

    return (
        <div>
            <div className= 'podsumowanie-chart'>tutaj będzie wykres kołowy z danych po prawej</div>
            <div className= 'podsumowanie-info'>
                <div>Dochody: </div>
                <div>Wydatki: </div>
                <div>Razem: </div>
            </div>
        </div>
    )
};