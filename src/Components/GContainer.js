import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class GContainer extends Component {
    render() {
        const styles = { flex: 1, padding: 10 , marginBottom:40,};
        if(this.props.noPadding)
        {
            styles.padding = 0;
        }
        return (
            <View style={styles}>
                {this.props.children}
            </View>
        );
    }
}

export default GContainer;