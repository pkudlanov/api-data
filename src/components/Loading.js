import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const loading = this.props.loading;
        if(!loading){
            return '<div></div>';
        }
        return /*html*/ `
            <div>
                <img src="https://media.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif">
            </div>
        `;
    }
}

export default Loading;