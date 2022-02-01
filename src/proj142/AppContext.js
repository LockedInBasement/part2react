import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [isUserLogged, setIsUserLogged] = useState(false);
    const handleToggleStateIsLogged = () => setIsUserLogged(prevValue => !prevValue);

    return(
        <AppContext.Provider value={ {isUserLogged: isUserLogged , toggleLoggedState: handleToggleStateIsLogged} } >
                {children}
        </AppContext.Provider>
    )
};

export default AppProvider;