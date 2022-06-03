import { combineReducers } from 'redux';

import userReducers from './user';
import productReducers  from './product';

export default combineReducers({
    userReducers, productReducers 
})