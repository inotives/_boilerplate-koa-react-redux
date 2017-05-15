import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import MainLayout from './pages-and-layout/MainLayout'

const Root = ({ store }) => {
  return (
    <Provider { ...{ store } } >

        <MainLayout />

    </Provider>
  )
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
