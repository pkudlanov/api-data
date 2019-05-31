import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

test('renders template from data', (assert) => {
    const character = {
        _id: '5cdf0769b6e02a467e3e76e7',
        allies: ['His gang'],
        enemies: ['Korra'],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/b/b2/Gombo.png/revision/latest?cb=20140629232813',
        name: 'Gombo',
        gender: 'Male',
        hair: 'Black and green',
        profession: 'Criminal',
        first: '"',
        __v: 0
    };

    const characterItem = new CharacterItem({ character });

    const rendered = characterItem.renderTemplate();
    
    
    
    assert.htmlEqual(rendered, /*html*/ `
        <li>
            <h2>Gombo</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/b/b2/Gombo.png/revision/latest?cb=20140629232813">
            <a class="enemies" href="#enemies=Gombo">Enemies</a>
            <a class="allies" href="#allies=Gombo">Allies</a>
        </li>   
    `);
});