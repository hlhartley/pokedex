export const errorReducer = (state = 'error', action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return action.message
        default:
            return state
    }
}; 