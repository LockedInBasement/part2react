import React from "react";
import { Provider } from 'redux';

import Form from "./store/Form";
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Form/>
        <p>Prog</p>
      </div>
    </Provider>
  );
}

export default App;
