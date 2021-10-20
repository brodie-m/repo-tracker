const initialState = {
    username: "", results: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'LOAD_RESULT':
        return { ...state, results: payload }

    default:
        return state
    }
}
