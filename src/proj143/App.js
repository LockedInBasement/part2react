import React, {createRef, PureComponent} from 'react';

import './style.css';

class App extends PureComponent {

    // textInput = React.createRef();
    paragraphElement = React.createRef();

    render()
    {
        return(
            <div>
                  <p ref={this.paragraphElement}>Test</p>
                  <button onClick={this.addChar}> Dodaj !</button>
            </div>
            // <div>
            //     <input type="text" ref={this.textInput}/>
            //     <p ref={this.paragraphElement}>Test</p>
            // <button onClick={this.focusTextInput}>Ustaw focus an input</button>
            // <button onClick={this.addChar}> Dodaj !</button>
            // </div>
        );
    }

    // focusTextInput = () => this.textInput.current.focus();
    addChar = () => this.paragraphElement.current.textContent += "!";
}

export default App;