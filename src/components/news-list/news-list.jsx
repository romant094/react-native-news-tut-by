import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {NewsItem} from '../news-item';

export const NewsList = ({items, handleSelectItem}) => {
    return (
        <FlatList
            data={items}
            renderItem={({item, index}) => <NewsItem item={item} handleSelectItem={() => handleSelectItem(index)} />}
            keyExtractor={(item, id) => id.toString()}
        />
    )
};
