import React , {useContext} from 'react';

import { AppContext } from './AppContext';

const Button = () => {

    const {toggleLoggedState} = useContext(AppContext);
    
    return (
        <button onClick={toggleLoggedState}>Przelacz</button>
        );
}

 
export default Button;