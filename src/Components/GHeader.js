import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class GHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                        }} style={{ justifyContent: 'center', paddingTop: 20, paddingLeft: 10, paddingRight:20, }}>
                            <Icon name="ios-arrow-back" color="#007AFF" size={30} />
                        </TouchableOpacity>
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
  },
  header: {
    height: 65,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    position: 'absolute',
    top: 0,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 100000,
},
});
