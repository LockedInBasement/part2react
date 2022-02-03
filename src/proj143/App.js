import React, {createRef, PureComponent} from 'react';

import Counter from './Counter';

import './style.css';

class App extends PureComponent {

    state = {
        isCounterVisible: true,
    }

    // textInput = React.createRef();
    paragraphElement = React.createRef();

    render()
    {
        const counterElement = this.state.isCounterVisible ? <Counter/> : null;

        return(
            <div>
                  <p ref={this.paragraphElement}>Test</p>
                  <button onClick={this.addChar}> Dodaj !</button>
                  <button onClick={this.toggleVisibilityCounter}>Show/Hide Counter</button>
                  {counterElement}
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

    toggleVisibilityCounter = () => {
        this.setState( prevState => ({ isCounterVisible: !prevState.isCounterVisible, }));
    }
}

export default App;