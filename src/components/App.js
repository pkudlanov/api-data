import characterApi from '../services/character-api.js';
import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const characterList = new CharacterList({ characters: [] });
        main.appendChild(characterList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        function loadCharacters() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);

            const enemies = searchParams.get('enemies');
            const allies = searchParams.get('allies');

            loading.update({ loading: true });

            if(enemies){
                const frenemy = 'enemies';

                characterApi.getCharacters(frenemy, enemies)
                    .then(characters => {
                        characterList.update({ characters });
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        loading.update({ loading: false });
                    });
            } else if(allies){
                const frenemy = 'allies';

                characterApi.getCharacters(frenemy, allies)
                    .then(characters => {
                        characterList.update({ characters });
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        loading.update({ loading: false });
                    });
            }
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
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