import React from 'react';

const Counter = ({callback, index}) =>{

    console.log(`render ${index}`);
    
    return(
        <div>
            <button onClick={callback}>Zwieksz licznik</button>
        </div>
    );

};
export default React.memo(Counter);