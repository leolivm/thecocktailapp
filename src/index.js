import React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
        <Routes />
      </Provider>
    </>
  );
}
