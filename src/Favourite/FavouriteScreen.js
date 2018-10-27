import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { GHeader } from '../Components';
import ImagePicker from 'react-native-image-crop-picker';
var RNFS = require('react-native-fs');
import RNPhotosFramework from 'react-native-photos-framework';


class FavouriteScreen extends Component {
    constructor(props) {
        super(props);

        RNFS.readDir(RNFS.MainBundlePath+"") 
            .then((result) => {
                console.log('GOT RESULT', result);
            })
        this.state = {

        };
        RNPhotosFramework.getAssets({
            startIndex: 0,
            endIndex: 2,
            fetchOptions: {
                sourceTypes: ['userLibrary'],
                sortDescriptors: [
                    {
                        key: 'creationDate',
                        ascending: true,
                    }
                ]
            }
        }).then((response) => {
            console.log(response.assets[0].image);
            console.log(response.assets);
            RNFS.copyAssetsFileIOS('assets-library://asset/asset.JPG?id=' + response.assets[0].localIdentifier, RNFS.MainBundlePath+'/MyImages/check.jpg', 200, 200).then((v) => console.log(v));
            this.setState({ image: response.assets[0].image });
        });
    }
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Select Pic" onPress={() => {
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: false,
                    }).then(image => {
                        this.setState({
                            image: { uri: 'photos://' + image.localIdentifier, name: image.filename, width: 400, height: 400, mime: image.mime },
                        });

                    });
                }}>

                </Button>
                {this.state.image &&

                    <Image style={{ width: '100%', height: 400 }} resizeMode="cover"
                        source={this.state.image} />
                }

            </View>
        );
    }
}

export default FavouriteScreen;