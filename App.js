import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BottomNavigation from './src/Navigation/BottomNavigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import withRedux from "./src/Store/withRedux";
import LockScreen from './src/Lock/LockScreen';




class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            {this.props.AppLock.Locked &&
              <LockScreen />
            }
            {!this.props.AppLock.Locked &&
              <BottomNavigation>
              </BottomNavigation>
            }
          </View>
        </View>
    );
  }
}
export default withRedux(App);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  }
});
