import characterApi from '../services/character-api.js';
import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const characterList = new CharacterList({ characters: [] });
        main.appendChild(characterList.render());

        characterApi.getCharacters()
            .then(characters => {
                characterList.update({ characters });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;