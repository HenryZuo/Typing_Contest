import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import timerReducer from './timerReducer';
import scoreReducer from './scoreReducer';
import streakReducer from './streakReducer';
import userInputReducer from './userInputReducer';
import currentIndexReducer from './currentIndexReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    totalScore: scoreReducer,
    streakCount: streakReducer,
    userInput: userInputReducer,
    currentIndex: currentIndexReducer,
    routing
});

export default rootReducer;
