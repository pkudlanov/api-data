const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const characterApi = {
    getCharacters(frenemy, character) {
        let url = URL;

        if(character){
            const searchParams = new URLSearchParams();
            searchParams.set(frenemy, character);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }

        return fetch(url)
            .then(response => response.json());
    }
};

export default characterApi;


// enemies https://last-airbender-api.herokuapp.com/api/v1/characters?enemies=${character.name}

//  allies https://last-airbender-api.herokuapp.com/api/v1/characters?allies=${character.name}

//     all https://last-airbender-api.herokuapp.com/api/v1/characters

// 4 tribes,  Water Tribe, Earth Kingdom, Fire Nation, and Air Nomads