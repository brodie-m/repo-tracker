const loadResult = (results, username) => ({
    type: 'LOAD_RESULT',
    payload: {results: results, username: username}
});

export const getResult = (username) => {
    return async (dispatch) => {
      try {
        const results = await fetchGitRepo(username);
        await dispatch(loadResult(results, username));
      } catch (err) {
        console.warn(err.message);
      }
    };
  };

const fetchGitRepo = async searchTerm => {
    try {
        const resp = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
        const data = await resp.json();
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}

