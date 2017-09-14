
const timerReducer = (state = 300, action) => {
    switch(action.type) {
        case'DECREMENT_TIMER':
            return state - 1;
        default:
            return state;
    }
};

export default timerReducer;
