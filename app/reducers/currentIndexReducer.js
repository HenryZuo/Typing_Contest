
const currentIndexReducer = (state = [0, 0], action) => {
    switch(action.type) {
        case'CHAR_ADDED':
            const copy0 = state.slice();
            copy0[1] = copy0[1] + 1;
            return copy0;
        case 'NEXT_WORD':
            const copy1 = state.slice();
            copy1[0] = copy1[0] + 1;
            return copy1;
        default:
            return state;
    }
};

export default currentIndexReducer;
