import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {formatDate} from '../utils';

export const NewsItem = ({item, handleSelectItem}) => {
    const published = formatDate(item.published);

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={handleSelectItem}>
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{published}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 14,
        marginBottom: 3
    },
    date: {
        color: '#777',
        fontSize: 12
    }
});
