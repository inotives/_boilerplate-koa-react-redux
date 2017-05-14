import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Counter from './modules/_sample-counter/Counter'

const Root = ({ store }) => {
  console.log(store)
  return (
    <Provider { ...{ store } } >

        <Counter/>

    </Provider>
  )
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
