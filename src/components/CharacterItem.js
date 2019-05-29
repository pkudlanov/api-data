import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <h2>Gombo</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/b/b2/Gombo.png/revision/latest?cb=20140629232813">
            </li>
        `;
    }
}

export default CharacterItem;