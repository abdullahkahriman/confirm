import React, { } from 'react';
import {
    StyleSheet,
    View, Text, TouchableOpacity
} from 'react-native';

const Dialog = (props) => {

    const close = () => {
        props.changeVisible(false)
    }

    const ok = () => {
        props.changeVisible(false);
        alert("Success!");
    }

    return (
        <View style={styles.wrapper} >
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
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.9)',
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
