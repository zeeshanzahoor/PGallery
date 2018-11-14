import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';


class BIconButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {
        if (this.props.route) {
          this.props.navigation.navigate(this.props.route);
        }
        else if(this.props.action)
        {
          switch (this.props.action)
          {
          }
        }
        else {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
          }).then(image => {
            
          });
        }
      }}>
        <Icon name={this.props.Icon} size={this.props.size} color='#555' />
      </TouchableOpacity>
    );
  }
}
export { BIconButton };

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: '#ccc',
  },
});
