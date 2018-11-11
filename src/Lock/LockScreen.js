import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import withRedux from '../Store/withRedux';


const RoundButtonWithIcon = (props)=>{
    return (
        <TouchableOpacity style={styles.RoundButton} onPress={props.OnButtonPress}>
            <Ionicons name={props.Icon} size={30} color={'white'} />
        </TouchableOpacity>
    );
}

const RoundButton = (props) => {
    return (
        <TouchableOpacity style={styles.RoundButton} onPress={props.OnButtonPress}>
            <Text style={styles.RoundButtonText}>{props.title}</Text>
            <Text style={styles.RoundButtonSubtitle}>ABC</Text>
        </TouchableOpacity>
    );
}
const RoundStar = (props) => {
    const classes = [styles.RoundStar];
    if (props.filled)
        classes.push(styles.FilledStar);
    return (
        <View style={classes}>

        </View>
    )
}
class LockScreen extends Component {
    constructor(props) {
        super(props);
        this.albums = this.props.realm.objects('Album');
        this.state = {
            CurrentPass: "",
        }
    }
    componentWillMount() {
        console.log(this.props);
    }
    OnBackSpacePress =()=>{
        this.setState({CurrentPass:this.state.CurrentPass.substring(0, this.state.CurrentPass.length-1)});
    };
    OnButtonPress = (ch) => {
        if (this.state.CurrentPass.length < 3) {
            this.setState({ CurrentPass: this.state.CurrentPass + ch });
        }
        if (this.state.CurrentPass.length == 3) {
            this.setState({ CurrentPass: this.state.CurrentPass + ch });
            var $this = this;
            setTimeout(function () {
                if ($this.state.CurrentPass == "8888") {
                    const { dispatch } = $this.props;
                    dispatch({ type: "Unlock" });
                }
                else
                {
                    $this.setState({ CurrentPass: '' });
                }
            }, 300);
        }
        else {

        }
    };
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.UpperContainer}>
                    <Text style={styles.EnterPinText}>Enter your Pin</Text>
                    <View style={styles.RoundStarContainer}>
                        {
                            [1, 2, 3, 4].map((item, index) => {
                                return <RoundStar key={index} filled={this.state.CurrentPass.length >= item}></RoundStar>
                            })
                        }
                    </View>
                </View>
                <View style={styles.ButtonContainer}>
                    <View style={styles.ButtonRow}>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(1) }} title="1" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(2) }} title="2" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(3) }} title="3" ></RoundButton>
                    </View>
                    <View style={styles.ButtonRow}>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(4) }} title="4" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(5) }} title="5" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(6) }} title="6" ></RoundButton>
                    </View>
                    <View style={styles.ButtonRow}>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(7) }} title="7" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(8) }} title="8" ></RoundButton>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(9) }} title="9" ></RoundButton>
                    </View>
                    <View style={styles.ButtonRow}>
                        <RoundButtonWithIcon Icon="ios-camera" OnButtonPress={() => { }}></RoundButtonWithIcon>
                        <RoundButton OnButtonPress={() => { this.OnButtonPress(0) }} title="0"></RoundButton>
                        <RoundButtonWithIcon Icon="ios-backspace" OnButtonPress={() => { this.OnBackSpacePress();}}></RoundButtonWithIcon>
                    </View>
                </View>
            </View>

        );
    }
}
export default withRedux(LockScreen);


const styles = StyleSheet.create({
    Container: { backgroundColor: '#003366', flex: 1 },
    UpperContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    ButtonContainer: { flex: 2, paddingLeft: 20, paddingRight: 20, },
    ButtonRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: 20, },
    EnterPinText: { color: 'white', textAlign: 'center', fontSize: 17, marginBottom: 30, },
    RoundStarContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: 'center',
    },
    FilledStar: { backgroundColor: '#ccc' },
    RoundStar: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 20,
    },
    RoundButton: {
        borderWidth: 1,
        borderColor: '#00162d',
        width: 70, height: 70,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001e3d',
    },
    RoundButtonText: {
        textAlign: "center",
        fontSize: 25,
        color: 'white',
    },
    RoundButtonSubtitle: {
        color: 'white',
        fontSize: 10,
    }
});
