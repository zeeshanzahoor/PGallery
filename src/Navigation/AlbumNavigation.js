
import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import AlbumScreen from "../Album/AlbumScreen";
import CreateAlbumScreen from "../Album/CreateAlbumScreen";
import HomeScreen from "../Home/HomeScreen";
import SwiperScreen from "../Album/SwiperScreen";
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            title: "Albums",
            headerRight: <TouchableOpacity onPress={navigation.getParam('showModal')}>
                <Icon name="ios-add" size={30} style={{ marginRight: 20, }} />
            </TouchableOpacity>
        })
    },
    Album: {
        screen: AlbumScreen,
        navigationOptions: {
            headerTitle: "My Images",
        }
    }
});

const AlbumStackNavigation = createStackNavigator({
    Main: {
        screen: RootStack,
    },
    Swiper: {
        screen: SwiperScreen,
    },
    CreateAlbum: {
        screen: CreateAlbumScreen,
    }
},
    {
        mode: 'modal',
        headerMode: 'none',
    });

AlbumStackNavigation.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export default AlbumStackNavigation;

