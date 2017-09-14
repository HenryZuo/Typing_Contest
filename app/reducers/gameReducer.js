import words from '../dictionary';
import _ from 'underscore';

const initState = _.shuffle(words).slice(0, 100);
const gameReducer = (state = initState, action) => {
    switch(action.type) {
        case'START_GAME':
            return state;
        case 'END_GAME':
            return initState;
        default:
            return state;
    }
};

export default gameReducer;
