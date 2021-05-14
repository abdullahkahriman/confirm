import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    View, Text, Dimensions, TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Dialog extends Component {
    constructor(props) {
        console.log("props");
        super(props);

        this.state = {
            isShow: props.isShow
        }
    }

    render() {
        const close = () => {
            this.setState({ isShow: false });
            console.log(this.state)
        }

        const ok = () => {
            this.setState({ isShow: false });
            console.log(this.state)
        }

        return (
            this.state.isShow && <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={[styles.textHeader, styles.color]}>Are you sure?</Text>
                    <Text style={[styles.textContent, styles.color]}>
                        Do you approve your transaction?
                </Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => close()} style={[styles.btn, styles.btnClose, { marginRight: 15 }]}>
                            <Text style={[styles.color, styles.btnText]}>close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => ok()} style={styles.btn}>
                            <Text style={[styles.color, styles.btnText]}>yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        position: 'absolute',
        top: 0,
        left: 0,
        height: height,
        width: width,
        zIndex: 9999,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#20232a',
        flex: 1,
        marginHorizontal: 25,
        borderRadius: 5,
        padding: 10
    },
    color: {
        color: 'white'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 14
    },
    textContent: {
        marginVertical: 5,
        fontSize: 12
    },
    btnContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnClose: {
        backgroundColor: '#3d3d3d'
    },
    btn: {
        backgroundColor: '#36accc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    btnText: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1
    }
});

export default Dialog;
