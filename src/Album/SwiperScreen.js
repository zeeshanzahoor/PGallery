import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    Button
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
    wrapper: {
        height: height - 60,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        justifyContent:'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width,
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
}

export default class SwiperScreen extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={{ flex: 1, }}>

                <View style={styles.wrapper}>
                    <Swiper
                        showsButtons={true}
                        style={styles.wrapper}
                        loop={true}>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:null}} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                    </Swiper>
                </View>
                <View style={{
                    height: 60, backgroundColor: '#ccc', position: 'absolute'
                    , bottom: 0, width: '100%'
                }}>
                <Button title="Back" onPress={()=>{
                    this.props.navigation.goBack();
                }}>
                </Button>
                </View>
            </View>
        )
    }
}