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


// GENERAL LINK
//     all https://last-airbender-api.herokuapp.com/api/v1/characters


// ENEMIES OR ALLIES
// enemies https://last-airbender-api.herokuapp.com/api/v1/characters?enemies=${character.name}

//  allies https://last-airbender-api.herokuapp.com/api/v1/characters?allies=${character.name}


// AFFILIATION
// Air Nomads https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Air+Nomads

// Air Nomads https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe
// 4 tribes,  Water Tribe, Earth Kingdom, Fire Nation, and Air Nomads