import React from 'react';
import {render} from 'react-dom';


import App from './App';
import rootReducer from './reducers';
import configureStore from './configureStore';

const store = configureStore(rootReducer);

render(
  <App {...{ store }} />,
  document.getElementById('app')
);
