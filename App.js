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
import {SetCredentialScreen} from './src/Setup';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      RequireSetup: false,
    }
  }
  componentWillMount() {

  }
  RenderLocked() {
    if(this.state.RequireSetup)
    {
      return (<SetCredentialScreen {...this.props}/>)
    }
    else
    {
      return (<LockScreen {...this.props} />)
    }
  }
  RenderUnLocked() {
    return <BottomNavigation />
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {this.props.AppLock.Locked && this.RenderLocked()}
          {!this.props.AppLock.Locked && this.RenderUnLocked()}
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
