const streakReducer = (state = 0, action) => {
    switch(action.type) {
        case'UPDATE_STREAK':
            return action.streakTracker;
        case 'END_GAME':
            return 0;
        default:
            return state;
    }
};

export default streakReducer;
