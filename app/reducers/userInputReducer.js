
const userInputReducer = (state = [''], action) => {
    switch(action.type) {
        case'CHAR_ADDED':
            const copy1 = state.slice();
            if (copy1[copy1.length - 1].length + 1 !== action.inputVal.length) {
                return state;
            }
            copy1[copy1.length - 1] = action.inputVal;
            return copy1;
        case 'NEXT_WORD':
            return [...state, ''];
        default:
            return state;
    }
};

export default userInputReducer;
