import React, {useState,useMemo, useCallback} from 'react';

import Counter from './Counter'

const App =() => {

    // const [state,setState] = useState({x:0, y:0});
    const [firstCounter,setFirstCounter] = useState(0);
    const [secondCounter,setSecondCounter] = useState(0);

    const increaseFirstCounter = useCallback( () => setFirstCounter(prevValue=> prevValue + 1),[]);
    const increaseSecondCounter =  useCallback( () => setSecondCounter(prevValue=> prevValue + 1),[]);
    // const increaseX= () => setState({...state,x:state.x + 1});
    // const increaseY= () => setState({...state,y:state.y + 1});
    
    const firstCounterComponent =  <Counter callback={increaseFirstCounter} index={1} />;
    const secondCounterComponent = <Counter callback={increaseSecondCounter} index={2} />;

    return(
        <div>
           <p>licznik 1 wynosi: {firstCounter}</p>
           <p>licznik 2 wynosi: {secondCounter}</p>
            {/* {firstCounterComponent} */}
            {/* <Counter counter={state} index={1}/>
            <Counter counter={state} index={2}/> */}
            {firstCounterComponent}
            {secondCounterComponent}
           {/* <button onClick = {increaseX}> Zwieksz licznik nr.1</button>
           <button onClick = {increaseY}> Zwieksz licznik nr.2</button> */}

        </div>
    );
}
export default App;