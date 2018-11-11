import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { GContainer, GCard, GHeader } from '../Components';

import Constants from '../Constants';
import withRedux from '../Store/withRedux';
import Modal from "react-native-modal";
import CreateAlbumScreen from '../Album/CreateAlbumScreen';

const CreateAlbumChunkComps = (props) => {
    return <View style={styles.cardContainer}>
        {
            props.Items.map((item, index) => {
                return <GCard key={item.Id} Title={item.Title} img={{ uri: require("../../img/taylor.jpg") }}></GCard>
            })
        }
    </View>
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
                    {
                        AlbumComps.map((item, index)=>{
                            return <CreateAlbumChunkComps key={index} Items={item}/>
                        })
                    }
                </ScrollView>
                <Modal isVisible={this.state.showModal}>
                    <CreateAlbumScreen {...this.props} Toggle={this.showModal}></CreateAlbumScreen>
                </Modal>
            </GContainer>
        );
    }
}

export default withRedux(HomeScreen);


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    innerContainer: {
        margin: 0,
        padding: 10,
        paddingTop: 15,
    },
    WarningCard: {
        height: 100,
        backgroundColor: '#c33636',
        marginBottom: 10,
        borderRadius: 7,
    }
});