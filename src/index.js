import React from 'react';
import {render} from 'react-dom';


import Root from './Root';
import rootReducer from './reducers';
import configureStore from './configureStore';

const store = configureStore(rootReducer);

render(
  <Root {...{ store }} />,
  document.getElementById('app')
);
