const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=50';

const characterApi = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default characterApi;