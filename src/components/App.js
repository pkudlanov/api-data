import characterApi from '../services/character-api.js';
import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ 
            message: '',
            characters: []
        });
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

            // for affiliations, affiliation equals frenemy
            const enemies = searchParams.get('enemies');
            const allies = searchParams.get('allies');
            // const waterTribe = searchParams.get('water+tribe');
            // const earthKingdom = searchParams.get('earth+kingdom');
            // const fireNation = searchParams.get('fire+nation');
            // const airNomads = searchParams.get('air+nomads');

            const groups = [
                { group: enemies, str: 'enemies' },
                { group: allies, str: 'allies' },
                { group: '', str: '' }
                // { group: waterTribe, str: 'affiliation' },
                // { group: earthKingdom, str: 'affiliation' },
                // { group: fireNation, str: 'affiliation' },
                // { group: airNomads, str: 'affiliation' }
            ];

            function loadCorrectGroup(groups){
                for(let i = 0; i < groups.length; i++) {
                    // const element = groups[i];

                    let emptyStr = groups.length - 1;
                    // console.log(emptyStr, 'empty str');
                    // console.log(groups[emptyStr], 'obj');

                    // console.log(groups[i].group, 'group');

                    if(groups[i].group){
                        header.update = ({ message: params });
    
                        characterApi.getCharacters(i.str, i.group)
                            .then(characters => {
                                characterList.update({ characters });
                                header.update({ characters });
                            })
                            .catch(err => {
                                /*eslint-disable-next-line*/
                                console.log(err);
                            })
                            .finally(() => {
                                loading.update({ loading: false });
                            });
                        i = groups.length;
                    } else if(i === emptyStr){
                        header.update = ({ message: params });
    
                        characterApi.getCharacters(i.str, i.group)
                            .then(characters => {
                                characterList.update({ characters });
                                header.update({ characters });
                            })
                            .catch(err => {
                                /*eslint-disable-next-line*/
                                console.log(err);
                            })
                            .finally(() => {
                                loading.update({ loading: false });
                            });
                    }
                    
                }

                // groups.forEach(x => {
                //     if(x.group){
                        
                //         // header.update = ({ message: params });
                        
                //         characterApi.getCharacters(x.str, x.group)
                //             .then(characters => {
                //                 characterList.update({ characters });
                //                 header.update({ characters });
                //             })
                //             .catch(err => {
                //                 /*eslint-disable-next-line*/
                //                 console.log(err);
                //             })
                //             .finally(() => {
                //                 loading.update({ loading: false });
                //             });
                //     } else {
                //         characterApi.getCharacters('', '')
                //             .then(characters => {
                //                 characterList.update({ characters });
                //                 header.update({ characters });
                //             })
                //             .catch(err => {
                //                 /*eslint-disable-next-line*/
                //                 console.log(err);
                //             })
                //             .finally(() => {
                //                 loading.update({ loading: false });
                //             });
                //     }
                //     break;
                // });
            }

            loadCorrectGroup(groups);
                
            // Water Tribe, Earth Kingdom, Fire Nation, and Air Nomads

            loading.update({ loading: true });

            // if(enemies){
            //     const frenemy = 'enemies';
                
            //     header.update({ message: params });
                
            //     loadCorrectCharacters(frenemy, enemies);
            // } else if(allies){
            //     const frenemy = 'allies';
                
            //     header.update({ message: params });
                
            //     loadCorrectCharacters(frenemy, allies);
            // } else {
            //     loadCorrectCharacters('', '');
            // }
        }

        // function loadCorrectCharacters(frenemy, frenemyParam) {
        //     characterApi.getCharacters(frenemy, frenemyParam)
        //         .then(characters => {
        //             characterList.update({ characters });
        //             header.update({ characters });
        //         })
        //         .catch(err => {
        //             /*eslint-disable-next-line*/
        //             console.log(err);
        //         })
        //         .finally(() => {
        //             loading.update({ loading: false });
        //         });
        // }

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