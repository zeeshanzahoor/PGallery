import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SetCredentialScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Setup Screen</Text>
            </View>
        );
    }
}

export default SetCredentialScreen;