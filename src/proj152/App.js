import React, { useEffect, useLayoutEffect , useState } from 'react';

import Triangle from './Triangle';

import './style.css'

const App = () => {

    // useEffect(
    //     () => console.log('Po wyrenderowaniu DOM'),
    //     []
    // );

    // useLayoutEffect(
    //     () => console.log('Przed wyrenderowaniem DOM'),
    //     []
    // )

    const [isVisible,setVisible] = useState(false);

    const handleOnClick = () => setVisible(prev => !prev);

    const triangleComponent = isVisible ? <Triangle/> : null;

    return (
        <div>
            <button onClick={handleOnClick} >Toggle</button>
            {triangleComponent}
        </div>
    );
}
export default App;