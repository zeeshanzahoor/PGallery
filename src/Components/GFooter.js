import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BIconButton } from './BButton';

import withRedux from '../Store/withRedux';

class GFooter extends React.Component {

  render() {
    if (this.props.AppState.Swiper) {
      if (this.props.AppState.SwiperFullScreen) {
        return (<View style={{ backgroundColor: 'black', marginBottom: -60 }} />);
      }
      else {
        return (
          <View style={styles.wrapper}>
            <BIconButton {...this.props} size={30} Icon="ios-share" action="Home" />
            <BIconButton {...this.props} size={30} Icon="ios-heart" action="Favourite" />
            <BIconButton {...this.props} size={33} Icon="ios-trash" action="Settings" />
          </View>
        );
      }
    }
    else {
      return (
        <View style={styles.wrapper}>
          <BIconButton {...this.props} mode="fill" size={25} Icon="ios-albums" route="Home" />
          <BIconButton {...this.props} mode="fill" size={25} Icon="ios-photos" route="Favourite" />
          <BIconButton {...this.props} mode="fill" size={35} Icon="ios-add-circle" />
          <BIconButton {...this.props} mode="fill" size={30} Icon="ios-settings" route="Settings" />
          <BIconButton {...this.props} mode="fill" size={33} Icon="ios-camera" route="Camera" />
        </View>
      );
    }
  }
}

export default withRedux(GFooter);

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    opacity: 0.95
  },
});
