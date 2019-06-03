import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
var RNFS = require('react-native-fs');

const MyImagesPath = RNFS.DocumentDirectoryPath + '/MyImages';

class BIconButton extends React.Component {
  CreateDirectory = () => {
    RNFS.mkdir(MyImagesPath, {
      NSURLIsExcludedFromBackupKey: true,
    }).then(r => {
    });
  }

  async CopyFiles(imageArray) {
    this.CreateDirectory();
    imageArray.map((image, index) => {
      let newFileName = MyImagesPath + '/' + image.filename;
        RNFS.copyFile(image.path, newFileName);
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.props.mode ? styles.button : styles.button2} onPress={() => {
        if (this.props.route) {
          this.props.navigation.navigate(this.props.route);
        }
        else if (this.props.action) {
          switch (this.props.action) {
          }
        }
        else {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            multiple: true,
            maxFiles: 10,
            cropping: false,
          }).then(image => {
            this.CopyFiles(image);
          });
        }
      }}>
        <Icon name={this.props.Icon} size={this.props.size} color='#3a98fc' />
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
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  }
});
