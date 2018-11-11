import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
var uuid = require('react-native-uuid');


class CreateAlbumScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AlbumTitle: "",
        }
    }
    SaveAlbum = () => {
        if (this.state.AlbumTitle.length > 0) {
            const { realm } = this.props;
            realm.write(() => {
                realm.create('Album', {
                    Id: uuid.v4(),
                    Title: this.state.AlbumTitle,
                    CreateDate: new Date(),
                })
            });
            this.props.Toggle();
        }
    }
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.Container}>
                    <View style={styles.Header}>
                        <Text style={styles.HeaderTitle}>Create New Album</Text>
                    </View>
                    <View style={styles.MainContainer}>
                        <TextInput
                            autoFocus={true}
                            autoCorrect={false}
                            value={this.state.AlbumTitle}
                            editable={true}
                            maxLength={20}
                            placeholder="Enter album title here"
                            placeholderTextColor='#bbb'
                            onChangeText={(value) => { this.setState({ AlbumTitle: value }) }}
                            style={styles.AlbumName}
                        />
                    </View>
                    <View style={styles.Footer}>
                        <TouchableOpacity style={styles.FooterButton} onPress={this.props.Toggle}>
                            <Text style={styles.FooterButtonText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.FooterButton, styles.FooterButtonRight]} onPress={this.SaveAlbum}>
                            <Text style={styles.FooterButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default CreateAlbumScreen;

var styles = StyleSheet.create({
    Container: { backgroundColor: 'white', width: '90%', borderRadius: 15 },
    Header: { borderBottomWidth: 1, borderColor: '#eee', height: 50, justifyContent: 'center', alignItems: 'center' },
    HeaderTitle: { textAlign: 'center', fontWeight: 'bold' },
    MainContainer: { padding: 15, },
    AlbumName: { borderWidth: 1, borderRadius: 5, padding: 10, borderColor: '#ccc' },
    Footer: { height: 50, borderTopWidth: 1, borderColor: '#eee', flexDirection: 'row' },
    FooterButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    FooterButtonRight: { borderLeftWidth: 1, borderLeftColor: '#eee' },
    FooterButtonText: { textAlign: 'center' }
})