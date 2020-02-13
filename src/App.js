import React from 'react';
import './App.scss';
import HomePage from './pages/HomePaga';
import { createStore } from "redux";
import { Provider } from "react-redux"

import reducer from "./redux/reducers/reducers";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>

  );
}

export default App;
