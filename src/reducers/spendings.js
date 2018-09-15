import {ADD_SPENDING, REMOVE_SPENDING} from "../actions";
import moment from "moment/moment";

const currentMonth = moment().format('MMMM');
export default function (state = [], action) {
    if (!state.hasOwnProperty(currentMonth)) {
        state[currentMonth] = 0;
    }

    if (action.type === ADD_SPENDING) {
        state[currentMonth] = state[currentMonth] + action.amount;
    } else if (action.type === REMOVE_SPENDING) {
        state[currentMonth] = state[currentMonth] - action.amount;
    }

    return state;
}
