import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GContainer, GCard, GHeader } from '../Components';
import Constants from '../Constants';


class HomeScreen extends Component {
    
    render() {
        return (
            <GContainer noPadding>
                <ScrollView showsVerticalScrollIndicator={false} bouncesZoom={true} contentContainerStyle={styles.innerContainer}>
                    <View style={styles.cardContainer}>
                        <GCard img={{ uri: require("../../img/taylor.jpg") }}></GCard>
                        <GCard img={{ uri: require("../../img/momina.jpg") }}></GCard>
                    </View>
                    <View style={styles.WarningCard}>

                    </View>
                    <View style={styles.cardContainer}>
                        <GCard img={{ uri: require("../../img/momina.jpg") }}></GCard>
                        <GCard img={{ uri: require("../../img/alia.jpg") }}></GCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <GCard img={{ uri: require("../../img/momina.jpg") }}></GCard>
                        <GCard img={{ uri: require("../../img/taylor.jpg") }}></GCard>
                    </View>
                </ScrollView>
            </GContainer>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    innerContainer: {
        margin:0,
        padding:10,
        paddingTop: 15,
    },
    WarningCard: {
        height: 100,
        backgroundColor: '#c33636',
        marginBottom: 10,
        borderRadius: 7,
    }
});