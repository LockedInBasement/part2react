import React, { PureComponent} from 'react';
import {AppContext} from './AppContext';


class UserInfo extends PureComponent {
   
    static contextType = AppContext;

    render() { 

        const { isUserLogged } = this.context;
        const userLoggedInfo = isUserLogged ? 'Zalogowany' : 'niezalogowany'; 

        return (
                    <div>
                        <p>Użytkownik jest {userLoggedInfo} </p>
                    </div>
        );
    }
}
 


export default UserInfo;