import { combineReducers } from 'redux'

import income from './income';
import spendings from './spendings';

export default combineReducers({ income, spendings });
