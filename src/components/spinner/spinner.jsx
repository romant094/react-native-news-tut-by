import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export const Spinner = () => {
    return (
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
};

const styles = StyleSheet.create({});
