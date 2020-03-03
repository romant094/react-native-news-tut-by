import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export const Navbar = () => {
    const URI = 'https://img.tyt.by/i/by4/responsive/logo-tut-smart.png';

    return (
        <View style={styles.navbar}>
            <Image style={styles.image} source={{uri: URI}} />
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 10,
        backgroundColor: '#f3f3f3'
    },
    text: {
        fontSize: 20
    },
    image: {
        width: 118,
        height: 45
    }
});
