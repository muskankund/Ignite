import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer';
import DetailReducer from './gameDetailReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    details: DetailReducer,
});
export default rootReducer;