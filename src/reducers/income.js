import moment from 'moment';

import { INCREASE_INCOME, DECREASE_INCOME } from "../actions";
//
// export default function (state = 0, action) {
//     if (action.type === INCREASE_INCOME) {
//         return state + action.amount;
//     } else if (action.type === DECREASE_INCOME) {
//         return state - action.amount;
//     }
//
//     return state;
// }

const currentMonth = moment().format('MMMM');

export default function (state = {}, action) {
    if (!state.hasOwnProperty(currentMonth)) {
        state[currentMonth] = 0;
    }

    if (action.type === INCREASE_INCOME) {
        state[currentMonth] = state[currentMonth] + action.amount;
    } else if (action.type === DECREASE_INCOME) {
        state[currentMonth] = state[currentMonth] - action.amount;
    }

    return state;
}


