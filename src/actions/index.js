const loadResult = (results) => ({
    type: 'LOAD_RESULT',
    payload:  results
});

export const getResult = searchTerm => {
    console.log('i have been called with',searchTerm)
    return async dispatch => {
        try{
            const data = await fetchGitRepo(searchTerm)
            console.log(data)
            dispatch(loadResult(data))
        } catch (err) {
            console.warn(err.message)
        }
    }
}

const fetchGitRepo = async searchTerm => {
    try {
        const resp = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
        const data = await resp.json();
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}