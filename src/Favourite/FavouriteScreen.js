import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import { GHeader } from '../Components';

class FavouriteScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <GHeader height={70}/>
                <Text>FavouriteScreen!</Text>
            </View>
        );
    }
}

export default FavouriteScreen;