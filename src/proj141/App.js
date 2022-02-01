import React , {useState} from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import {AppContext, defaultObject} from './AppContext';

import './style.css';

const App = () => {
    
    const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
 
    const handleToggleStateIsLogged = () => setIsUserLogged(prevValue => !prevValue);

    return(
            <div>
                <AppContext.Provider value={ {isUserLogged: isUserLogged , toggleLoggedState: handleToggleStateIsLogged} } >
                <UserInfo/>
                <Button/>
                </AppContext.Provider>
            </div>
        );
    

    
}

export default App;