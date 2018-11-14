import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions, StyleSheet,
    Button
} from 'react-native';
import Swiper from 'react-native-swiper';
import withRedux from '../Store/withRedux';


const { width, height } = Dimensions.get('window');

const styles = {
    wrapper: {
        height: height - 60,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center',
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

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

class SwiperScreen extends Component {
    
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({ type: "OpenSwiper" });
        this.didBlurSubscription = this.props.navigation.addListener('willBlur',
            payload => {
                const { dispatch } = this.props;
                dispatch({ type: "CloseSwiper" });
            }
        );
        this.props.navigation.setParams({ title: 'your content' })
    }
    componentWillUnmount() {
        this.didBlurSubscription.remove();
    }
    render() {
        return (
            <View style={mstyles.Container}>
                <View style={styles.wrapper}>
                    <Swiper
                        showsButtons={false}
                        renderPagination={renderPagination}
                        style={styles.wrapper}
                        loop={true}>

                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/alia.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/momina.jpg')}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={{ width: null }} resizeMode="contain" source={require('../../img/taylor.jpg')}></Image>
                        </View>
                    </Swiper>
                </View>

            </View>
        )
    }
}

export default withRedux(SwiperScreen);

const mstyles = StyleSheet.create({
    Container: {

    },
})