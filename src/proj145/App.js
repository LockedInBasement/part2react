import React, {createRef, useRef , useState } from 'react';

import './style.css';

const App = () => {

    const [counter,setCounter] = useState(0);
    const textInputRef = useRef();

    const numberInputRef = createRef();

    const focusOnInput = () => textInputRef.current.focus();
    const increaseCounter = () => setCounter(counter + 1);

    return(

            <div>
                <input ref={textInputRef} type="text" />
                <input ref={numberInputRef} type="number" />
            <button onClick={focusOnInput}>Ustaw focus an input</button>
            <button onClick={increaseCounter}>Przerenderuj component</button>
            </div>
        );  
}

export default App;