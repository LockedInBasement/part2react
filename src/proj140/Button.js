import React , {PureComponent} from 'react';

import { AppContext } from './AppContext';

class Button extends PureComponent {

    static contextType = AppContext;

    render() { 
        return (
                <button onClick={this.context.toggleLoggedState}>Przelacz</button>
        );
    }
}
 
export default Button;