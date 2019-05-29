import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}">
                <a class="enemies" href="#enemies=${character.name}">Enemies</a>
                <a class="allies" href="#allies=${character.name}">Allies</a>
            </li>
        `;
    }
}

export default CharacterItem;

// enemies https://last-airbender-api.herokuapp.com/api/v1/characters?enemies=${character.name}

//  allies https://last-airbender-api.herokuapp.com/api/v1/characters?allies=${character.name}
