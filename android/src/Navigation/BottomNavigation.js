import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../Home/HomeScreen';

import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../Settings/SettingsScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import CameraScreen from '../Camera/CameraScreen';
import AlbumStackNavigation from './AlbumNavigation';

const TabBarComponent = (props) => (<View />);
const TabBarIcon = () => { }

const BottomNavigation = createBottomTabNavigator({
  Home: AlbumStackNavigation,
  Favourite: FavouriteScreen,
  Settings: SettingsScreen,
  Camera: CameraScreen,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Album') {
          iconName = 'ios-photos';
        }
        else if (routeName === 'Favourite') {
          iconName = 'ios-heart';
        }
        else if (routeName === 'Home') {
          iconName = 'ios-albums';
        }
        else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }
        else if (routeName === 'Camera') {
          iconName = 'ios-camera';
        }
        if (!focused) {
          iconName += '-outline';
        }
        return (
          <Ionicons name={iconName} size={!focused ? 30 : 32} color={tintColor} />
        );
      },
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#444',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  });

export default BottomNavigation;

