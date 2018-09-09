import React from 'react';

import "./podsumowanie.css"

export const Podsumowanie = (props) => {
    return (
        <div>
            <div className= 'podsumowanie-chart'>tutaj będzie wykres kołowy z danych po prawej</div>
            <div className= 'podsumowanie-info'>
                <div>Dochody: { props.income }</div>
                <div>Wydatki: </div>
                <div>Razem: </div>
            </div>
        </div>
    )
};
