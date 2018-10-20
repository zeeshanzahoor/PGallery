
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import AlbumScreen from "../Album/AlbumScreen";
import HomeScreen from "../Home/HomeScreen";
import SwiperScreen from "../Album/SwiperScreen";

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Album: AlbumScreen,
});

const AlbumStackNavigation = createStackNavigator({
    Main: {
        screen: RootStack,
    },
    Swiper: {
        screen: SwiperScreen,
    },
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

