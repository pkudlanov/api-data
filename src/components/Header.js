import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        const charsLength = this.props.characters.length;

        const message = this.props.message;
        //const capitalized = message.charAt(0).toUpperCase() + message.slice(1);

        const wholeMessage = message.split('=', 2);
        
        console.log(message, 'message');
         
        const frenemy = wholeMessage[0];
        let name = wholeMessage[1];
        
        console.log(frenemy, 'fren');
        
        // console.log(nameRaw, 'nameRaw');
        
        
        
        // if(name){
        //     name = name.replace(/%20/g, ' ');
        //     console.log(name, 'name');
        // }
        
        // let finalMessage;
        
        // if(!charsLength && !message){
        //     finalMessage = 'All the Characters';
        // } else if(!message){
        //     finalMessage = 'All the characters';
        // } else {
        //     finalMessage = name + ' has ' + charsLength + ' ' + frenemy + '.';
        // }

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