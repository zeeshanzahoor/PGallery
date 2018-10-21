import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BIconButton } from './BButton';

export default class GFooter extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <BIconButton {...this.props} size={25} Icon="ios-apps" route="Home" />
        <BIconButton {...this.props} size={25} Icon="ios-heart" route="Favourite" />
        <BIconButton {...this.props} size={35} Icon="ios-add-circle" />
        <BIconButton {...this.props} size={25} Icon="ios-settings" route="Settings" />
        <BIconButton {...this.props} size={30} Icon="ios-camera" route="Camera" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    backgroundColor: '#ffe',
    borderTopWidth: 0.5,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    opacity: 0.95,
  },
});
