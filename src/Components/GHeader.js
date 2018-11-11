import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class GHeader extends React.Component {
  render() {
    return (
      <View style={[styles.wrapper, { height: this.props.height }]}>
        <Text style={styles.logo}>My Gallery</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaaaaa',
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
    opacity: 0.95,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontFamily: 'Billabong',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '900',
    marginTop: 20,
  }
});
