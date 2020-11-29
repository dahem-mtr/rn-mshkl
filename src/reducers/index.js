import { combineReducers } from 'redux';

import appReducer from './appReducer';
import gameReducer from './gameReducer';


export default combineReducers(
    {
        app: appReducer,
        game: gameReducer,

    }
);