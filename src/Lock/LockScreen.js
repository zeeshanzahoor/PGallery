import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import withRedux from '../Store/withRedux';

class LockScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Change Lock State" onPress={() => {
                    const { dispatch } = this.props;
                    dispatch({ type: "Unlock" });
                }}>

                </Button>
                <Text>
                    {this.props.AppLock.Locked.toString()}
                </Text>
            </View>
        );
    }
}

export default withRedux(LockScreen);
