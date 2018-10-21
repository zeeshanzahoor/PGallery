import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { GHeader } from '../Components';
import ImagePicker from 'react-native-image-crop-picker';
class FavouriteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
                            image: { uri: image.path, width: 400, height: 400, mime: image.mime },
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