import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { GContainer, GCard, GHeader } from '../Components';

import Constants from '../Constants';
import withRedux from '../Store/withRedux';
import Modal from "react-native-modal";
import CreateAlbumScreen from '../Album/CreateAlbumScreen';
import { connect } from "react-redux";


const CreateAlbumChunkComps = (props) => {
    return <View style={styles.cardContainer}>
        {
            props.Items.map((item, index) => {
                return <GCard key={item.Id} Title={item.Title} img={{ uri: require("../../img/taylor.jpg") }}></GCard>
            })
        }
    </View>
}
const CreateWarningCard = (pops) => {
    return(<View style={styles.warningContainer}>
        <Text style={styles.warningText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Text>
        <Button title="Setup Password">
            
        </Button>
    </View>);
}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        let Albums =
            this.state = {
                showModal: false,
                Albums: this.props.realm.objects('Album')
            }

    }
    componentDidMount() {
        this.props.navigation.setParams({ showModal: this.showModal });
    }
    showModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }
    *SplitArray(arr) {
        while (arr.length > 0) {
            var temp = arr.slice(0, 2);
            arr = arr.slice(2, arr.length);
            yield temp;
        }
    };

    render() {
        var AlbumComps = [];
        const MyAlbums = this.state.Albums;
        var Iterator = this.SplitArray(MyAlbums);
        while (true) {
            const Chunk = Iterator.next();
            if (Chunk.done) break;
            AlbumComps.push(Chunk.value);
        }
        return (
            <GContainer noPadding>

                <ScrollView showsVerticalScrollIndicator={false} bouncesZoom={true} contentContainerStyle={styles.innerContainer}>
                    <CreateWarningCard></CreateWarningCard>
                    {
                        AlbumComps.map((item, index) => {
                            return <CreateAlbumChunkComps key={index} Items={item} />
                        })
                    }
                </ScrollView>
                <Modal isVisible={this.state.showModal} animationIn='slideInDown' animationOut='slideOutUp' useNativeDriver={true}>
                    <CreateAlbumScreen {...this.props} Toggle={this.showModal}></CreateAlbumScreen>
                </Modal>
            </GContainer>
        );
    }

}
function mapStateToProps(state) {
    return state;
}

//export default HomeScreen;

//const connectedPage = connect(mapStateToProps)(HomeScreen);
//export default connectedPage;
export default withRedux(HomeScreen);


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    warningContainer: {
        backgroundColor:'#F0EFF3',
        marginBottom:10,
        borderRadius:5,
        padding:20,
    },
    warningText:{
        color:'black',
        fontSize:13,
        fontWeight:'500',
        textAlign:'center'
    },
    innerContainer: {
        margin: 0,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 60,
    },
    WarningCard: {
        height: 100,
        backgroundColor: '#c33636',
        marginBottom: 10,
        borderRadius: 7,
    }
});