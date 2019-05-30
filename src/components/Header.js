import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        const charsLength = this.props.characters.length;

        const message = this.props.message;
        const capitalized = message.charAt(0).toUpperCase() + message.slice(1);

        const parts = capitalized.split('=', 2);
        
        console.log(parts, 'capit');
         
        const frenemy = parts[0];
        const name = parts[1];

        let finalMessage;

        console.log(message);
        
        if(!charsLength && !message){
            finalMessage = 'All Characters';
            
        } else if(!message){
            finalMessage = 'All the characters';
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