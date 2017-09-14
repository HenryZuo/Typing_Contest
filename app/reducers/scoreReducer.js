const scoreReducer = (state = 0, action) => {
    switch(action.type) {
        case'UPDATE_SCORE':
            return action.scoreTracker;
        case 'END_GAME':
            return 0;
        default:
            return state;
    }
};

export default scoreReducer;
