import React from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import AppProvider from './AppContext';

import './style.css';

const App = () => (
            <div>
                <AppProvider>
                <UserInfo/>
                <Button/>
                </AppProvider>
            </div>
);

export default App;