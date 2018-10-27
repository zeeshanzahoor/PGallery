/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import withRedux from "./src/Store/withRedux";
import AppLock from "./src/Store/Store";

const store = createStore(AppLock);


class AppStarter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppStarter);
