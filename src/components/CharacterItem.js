import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;

        const src = character.photoUrl || './assets/placeholder.png';
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${src}">
                <a class="enemies" href="#enemies=${character.name}">Enemies</a>
                <a class="allies" href="#allies=${character.name}">Allies</a>
            </li>
        `;
    }
}

export default CharacterItem;
