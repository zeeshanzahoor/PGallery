import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions, StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import withRedux from '../Store/withRedux';
import Icon from 'react-native-vector-icons/Ionicons';
import Gallery from 'react-native-photo-gallery';
import GHeader from '../Components/GHeader';

console.disableYellowBox = true;

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


const data = [
    {
        image: require('../../img/alia.jpg'),
        thumb: require('../../img/alia.jpg'),
    },
    {
        image: require('../../img/alia.jpeg'),
        thumb: require('../../img/alia.jpeg'),
    },
    {
        image: require('../../img/momina.jpg'),
        thumb: require('../../img/momina.jpg'),
    },
    {
        image: require('../../img/taylor.jpg'),
        thumb: require('../../img/taylor.jpg'),
    },
];



class SwiperScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            params,
            header:null,
        };
    };
    constructor(props) {
        super(props);
        this.IsFullScreen = false;
        this.state = { backgroundColor: 'white', showPagination: true, };
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({ type: "OpenSwiper" });
        this.didBlurSubscription = this.props.navigation.addListener('willBlur',
            payload => {
                const { dispatch } = this.props;
                dispatch({ type: "CloseSwiper" });
            }
        );
    }
    MakeFullScreen = () => {
        const { dispatch } = this.props;

        if (this.IsFullScreen) {
            this.IsFullScreen = false;
            dispatch({ type: "CloseSwiperFullScreen" });
            this.setState({ backgroundColor: 'white', showPagination: true, });
        }
        else {
            this.IsFullScreen = true;
            dispatch({ type: "OpenSwiperFullScreen" });
            this.props.navigation.setParams(
                {
                    header: null,
                });
            this.setState({ backgroundColor: 'black', showPagination: false, });
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        this.didBlurSubscription.remove();
    }
    render() {
        return (
            <View style={{ flex: 1, marginBottom: 60 }}>
                {!this.IsFullScreen &&
                   <GHeader {...this.props}/>
                }
                <Gallery
                    showPagination={this.state.showPagination}
                    onSingleTap={() => {
                        this.MakeFullScreen();
                    }} backgroundColor={this.state.backgroundColor} data={data} />
            </View>

        )
    }
}

export default withRedux(SwiperScreen);

const mstyles = StyleSheet.create({
    Container: {

    },
    header: {
        height: 65,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        position: 'absolute',
        top: 0,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        zIndex: 100000,
    },
})