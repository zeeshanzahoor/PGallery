import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BottomNavigation from './src/Navigation/BottomNavigation';


class App extends React.Component {

  render() {



    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <BottomNavigation>
          </BottomNavigation>
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  }
});
