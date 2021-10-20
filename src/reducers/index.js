const initialState = {
    username: "", results: ""
}

const resultsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_RESULT':
        return { ...state, results: payload }

    default:
        return state
    }
}
export default resultsReducer
