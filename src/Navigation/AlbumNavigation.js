
import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import AlbumScreen from "../Album/AlbumScreen";
import CreateAlbumScreen from "../Album/CreateAlbumScreen";
import HomeScreen from "../Home/HomeScreen";
import SwiperScreen from "../Album/SwiperScreen";
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const AlbumStackNavigation = createStackNavigator({
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
    },
    Swiper: {
        screen: SwiperScreen,

    }
});

// const AlbumStackNavigation = createStackNavigator({
//     Main: {
//         screen: RootStack,
//         headerMode: 'none',
//         header: null,
//         navigationOptions: {
//             header: null,
//         }
//     },
//     Swiper: {
//         screen: SwiperScreen,
//     }
// },
//     {
//     });

// AlbumStackNavigation.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     return true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return {
//         tabBarVisible,
//     };
// };

export default AlbumStackNavigation;

