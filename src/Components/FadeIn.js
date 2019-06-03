import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';


class FadeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0)
    }
  }
  componentDidMount() {
    this.showBox();
  }
  showBox = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: this.props.duration,
    }).start();
  }
  render() {
    return (
      <Animated.View style={{ opacity: this.state.fadeValue }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
export default FadeIn;