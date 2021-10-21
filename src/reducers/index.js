const initialState = {
    username: "", results: []
}

const resultsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_RESULT':
        return { ...state, results: payload.results, username: payload.username }

    default:
        return state
    }
}
export default resultsReducer
