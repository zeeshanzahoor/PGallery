import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import HomeScreen from '../Home/HomeScreen';

import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../Settings/SettingsScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import CameraScreen from '../Camera/CameraScreen';
import AlbumStackNavigation from './AlbumNavigation';
import GFooter from '../Components/GFooter';

const TabBarComponent = (props) => (<View />);
const TabBarIcon = () => { }


class DefaultBottomNavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routeName } = this.props.navigation.state;
    console.log(routeName);
    return (
      <View>
        <Ionicons name={iconName} size={!focused ? 30 : 32} color={tintColor} />
      </View>
    );
  }
}



const BottomNavigation = createBottomTabNavigator({
  Home: AlbumStackNavigation,
  Favourite: FavouriteScreen,
  Settings: SettingsScreen,
  Camera: CameraScreen,
},
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'Album') {
    //       iconName = 'ios-photos';
    //     }
    //     else if (routeName === 'Favourite') {
    //       iconName = 'ios-heart';
    //     }
    //     else if (routeName === 'Home') {
    //       iconName = 'ios-albums';
    //     }
    //     else if (routeName === 'Settings') {
    //       iconName = 'ios-settings';
    //     }
    //     else if (routeName === 'Camera') {
    //       iconName = 'ios-camera';
    //     }
    //     if (!focused) {
    //       iconName += '';
    //     }
    //     return (
    //       <Ionicons name={iconName} size={!focused ? 30 : 32} color={tintColor} />
    //     );
    //   },
    // }),
    tabBarComponent: GFooter,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#444',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  });

export default BottomNavigation;
