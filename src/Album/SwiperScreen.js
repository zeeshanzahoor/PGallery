import GHeader from '../Components/GHeader';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
const { width, height } = Dimensions.get("window");

class Slide extends React.Component {
    render() {
        return (
            <View style={{ width: width, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ width:width, height:height, }} resizeMode="contain" source={this.props.data.image}></Image>
                </View>
            </View>
        )
    }
}

class SwiperScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            params,
            header: null,
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0)
        };
        this.data = [];
        this.initialIndex = this.props.navigation.state.params.initialIndex;
        this.props.navigation.state.params.ImageData.map((item, index) => {
            if (!item.key) {
                this.data.push({
                    image: { key: index + 'o', uri: item.path, name: item.filename, mime: item.mime },
                });
            }
        });
    }
    _keyExtractor = (item, index) => index + "o";
    getItemLayout = (item, index) => (
        { length: width, offset: width * index, index }
    );
    render() {
        return (
            <View style={{flex:1,}}>
                <GHeader {...this.props} />
                <FlatList
                    contentContainerStyle={{}}
                    initialNumToRender={15}
                    pagingEnabled={true}
                    initialScrollIndex={this.initialIndex}
                    keyExtractor={this._keyExtractor}
                    data={this.data}
                    getItemLayout={this.getItemLayout}
                    renderItem={({ item, index }) => {
                        return (<Slide data={item} key={index}></Slide>);
                    }}
                    horizontal={true}>
                </FlatList>

            </View>

        );
    }
}
export default SwiperScreen;




















// import React, { Component } from 'react'
// import {
//     Text,
//     View,
//     Image,
//     Dimensions, StyleSheet,
//     Button,
//     TouchableOpacity
// } from 'react-native';
// import Swiper from 'react-native-swiper';
// import withRedux from '../Store/withRedux';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Gallery from 'react-native-photo-gallery';
// import GHeader from '../Components/GHeader';
// import Carousel from 'react-native-snap-carousel';

// const { width, height } = Dimensions.get('screen');

// const styles = {

// };

// class Slide extends Component {
//     render() {
//         return (<TouchableOpacity activeOpacity={1} onPress={this.props.onPress}>
//             <Image style={styles.slide} resizeMode="contain" source={this.props.image}></Image>
//         </TouchableOpacity>)
//     }
// }
// class SwiperScreen extends Component {
//     static navigationOptions = ({ navigation }) => {
//         const { params } = navigation.state;
//         return {
//             params,
//             header: null,
//         };
//     };
//     constructor(props) {
//         super(props);
//         this.IsFullScreen = false;
//         this.state = { backgroundColor: 'white', showPagination: true, };
//         this.data = [];
//         this.initialIndex = this.props.navigation.state.params.initialIndex;
//         this.props.navigation.state.params.ImageData.map((item, index) => {
//             if (!item.key)
//                 this.data.push({
//                     image: { uri: item.path, name: item.filename, width: width, height: height, mime: item.mime },
//                 });
//         });
//     }
//     componentWillMount() {
//         const { dispatch } = this.props;
//         dispatch({ type: "OpenSwiper" });
//         this.didBlurSubscription = this.props.navigation.addListener('willBlur',
//             payload => {
//                 const { dispatch } = this.props;
//                 dispatch({ type: "CloseSwiper" });
//             }
//         );
//     }
//     MakeFullScreen = () => {
//         const { dispatch } = this.props;

//         if (this.IsFullScreen) {
//             this.IsFullScreen = false;
//             dispatch({ type: "CloseSwiperFullScreen" });
//             this.setState({ backgroundColor: 'white', showPagination: true, });
//         }
//         else {
//             this.IsFullScreen = true;
//             dispatch({ type: "OpenSwiperFullScreen" });
//             this.props.navigation.setParams({
//                 header: null,
//             });
//             this.setState({ backgroundColor: 'black', showPagination: false, });
//         }
//     }
//     componentDidMount() {

//     }
//     componentWillUnmount() {
//         this.didBlurSubscription.remove();
//     }
//     _renderItem({ item, index }) {
//         return (
//             <Slide  onPress={()=>{
//             }} image={item.image} />
//         );
//     }
//     render() {
//         const s = Dimensions.get('screen').width;

//         return (
//             // <View style={{ flex: 1, marginBottom: 60 }}>
//             //     {/* {!this.IsFullScreen &&
//             //         <GHeader {...this.props} />
//             //     } */}


//             //     {/* <Gallery
//             //         showPagination={this.state.showPagination}
//             //         initialIndex={this.initialIndex}
//             //         onSingleTap={() => {
//             //             //this.MakeFullScreen();
//             //         }} backgroundColor={this.state.backgroundColor} data={this.data} /> */}
//             // </View>

//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
//                 {!this.IsFullScreen &&
//                     <GHeader {...this.props} />
//                 }
//                 <Carousel
//                     ref={(c) => { this._carousel = c; }}
//                     data={this.data}
//                     slideStyle={{ alignItems: 'center', backgroundColor: 'white', flex: 1, justifyContent: 'center' }}
//                     sliderWidth={s}
//                     inactiveSlideScale={0.99}
//                     itemWidth={s}
//                     firstItem={this.initialIndex}
//                     renderItem={this._renderItem}
//                 />
//             </View>

//         )
//     }
// }

// export default withRedux(SwiperScreen);

// const mstyles = StyleSheet.create({
//     Container: {

//     },
//     slide: {
//         height: 300,
//         width: 300,
//     },
//     header: {
//         height: 65,
//         backgroundColor: 'white',
//         borderTopWidth: 1,
//         borderTopWidth: 0.5,
//         borderColor: '#ccc',
//         position: 'absolute',
//         top: 0,
//         flex: 1,
//         flexDirection: 'row',
//         width: '100%',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         zIndex: 100000,
//     },
// })