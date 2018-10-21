import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class GCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const s = this.props.img.uri;
        return (

            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.cardInnerContainer} onPress={() => {
                    this.props.navigation.navigate("Album")
                }}>
                    <Image blurRadius={25} style={styles.Image} resizeMode="cover" source={s}></Image>
                    <View style={styles.TitleBox}>
                        <Text style={styles.Title}>Camera Roll</Text>
                        <Text style={styles.Title}>(0)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(GCard);

const styles = StyleSheet.create({
    cardContainer: {
        height: 170,
        width: '48.5%',
        borderRadius: 7,
        backgroundColor:'transparent',
    },
    cardInnerContainer: {
        flex: 1,
        borderColor: '#eee',
        borderRadius: 7,
        backgroundColor: '#eee',
    },
    Image: { flex: 1, width: '100%', borderRadius: 7, },
    TitleBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius:7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
    },
    Title: {
        color: '#999',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 23,
    }
});