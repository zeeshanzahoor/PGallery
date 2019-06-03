import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { GHeader } from '../Components';
import ImagePicker from 'react-native-image-crop-picker';
var RNFS = require('react-native-fs');
import RNPhotosFramework from 'react-native-photos-framework';


class FavouriteScreen extends Component {
    constructor(props) {
        super(props);
        const p = RNFS.DocumentDirectoryPath + '/MyImages';
        console.log(p);
        RNFS.mkdir(p, {
            NSURLIsExcludedFromBackupKey: true,
        }).then(r => {
            console.log(r);
        });
        RNFS.readDir(p)
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
            RNFS.copyAssetsFileIOS('assets-library://asset/asset.JPG?id=' + response.assets[0].localIdentifier, p + '/check.jpg', 200, 200).then((v) => console.log(v));
            this.setState({ image: response.assets[0].image });
        });
    }
    render() {
        let t = "zee";
        if(this.state.image)
        {
            t = this.state.image.uri;
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                    editable={true}
                    maxLength={40}
                    value={t} />
                <Button title="Select Pic" onPress={() => {
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: false,
                    }).then(image => {
                        this.setState({
                            image: { uri: "/Users/zahoor/Library/Developer/CoreSimulator/Devices/9AABF960-B82C-470C-93F9-C3EB9209920F/data/Containers/Data/Application/6D43331F-D126-4AFF-9671-A0390354D91B/Documents/MyImages/IMG_0006.HEIC", name: image.filename, width: 400, height: 400, mime: image.mime },
                        });
                        console.log(this.state);
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