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
                <TouchableOpacity activeOpacity={0.7} style={styles.cardInnerContainer} onPress={() => {
                    this.props.navigation.navigate("Album", { Title: this.props.Title })
                }}>
                                    <View style={styles.TitleBox}>
                        <Text style={styles.Title}>{this.props.Title}</Text>
                    </View>
                    <Image style={styles.Image} resizeMode="cover" source={s}></Image>

                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(GCard);

const styles = StyleSheet.create({
    cardContainer: {
        width: '48.5%',
        backgroundColor: 'transparent',
        
        height:170,
        borderRadius:5,
        position:'relative'
    },
    cardInnerContainer: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius:5,
    },
    Image: { flex: 1, width: '100%', height: 170, 
    borderRadius:5,

},
    TitleBox: {
        width: '100%',
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        position:'absolute',
        bottom:0,
        left:0,
        opacity:0.5,
        zIndex:1000000,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    Title: {
        padding: 5,
        fontWeight:'bold'
    }
});