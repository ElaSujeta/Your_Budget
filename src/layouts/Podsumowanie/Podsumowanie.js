import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import "./podsumowanie.css"
import moment from "moment/moment";

const curerentMonth = moment().format('MMMM');

export const Podsumowanie = (props) => {
    const data = {
        labels: [
            'Green',
            'Red',
        ],
        datasets: [{
            data: [props.income, props.spendings],
            backgroundColor: [
                '#FF6384',
                '#36A2EB'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB'
            ]
        }]
    };

    return (
        <div> {curerentMonth}
            <div className= 'podsumowanie-chart'>tutaj będzie wykres kołowy z danych po prawej

            <Doughnut data={data}/>

            </div>
            <div className= 'podsumowanie-info'>
                <div>Dochody: { props.income }</div>
                <div>Wydatki: { props.spendings }</div>
                <div>Razem: { props.income - props.spendings }</div>
            </div>
        </div>
    )
};
