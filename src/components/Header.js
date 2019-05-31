import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        const charsLength = this.props.characters.length;
        const message = this.props.message;

        const wholeMessage = message.split('=', 2);
        const frenemy = wholeMessage[0];
        let name = wholeMessage[1];
        
        if(name){
            name = name.replace(/%20/g, ' ');
        }
        
        let finalMessage;

        if(!message){
            finalMessage = 'All the characters';
        } else if(!charsLength){
            finalMessage = name + ' has no ' + frenemy;
        } else {
            finalMessage = name + ' has ' + charsLength + ' ' + frenemy + '.';
        }

        return /*html*/ `
            <header>
                <h1>Characters from Last Airbender</h1>
                <a href="./">All Characters</a>
                <h2>${finalMessage}</h2>
            </header>
        `;
    }
}

export default Header;