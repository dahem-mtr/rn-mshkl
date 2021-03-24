import { combineReducers } from 'redux';

import appReducer from './appReducer';
import controllerReducer from './controllerReducer';


export default combineReducers(
    {
        app: appReducer,
        controller: controllerReducer,

    }
);