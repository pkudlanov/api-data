import Component from './Component.js';
import CharacterList from './CharacterList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const characterList = new CharacterList({});
        main.appendChild(characterList.render());

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