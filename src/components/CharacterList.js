import Component from './Component.js';
import CharacterItem from './CharacterItem.js';

class CharacterList extends Component {
    render() {
        const list = this.renderDOM();

        const characterItem = new CharacterItem({});
        list.appendChild(characterItem.render());

        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <ul>
            </ul>
        `;
    }
}

export default CharacterList;