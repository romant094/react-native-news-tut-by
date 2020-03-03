import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NewsList} from '../../news-list';
import {Spinner} from '../../spinner';
import {fetchRssResource} from '../../utils';
import {RSS_URL} from '../../constants';

export const Home = ({navigation}) => {
    const [items, setItems] = useState(null);

    const handleSelectItem = id => {
        navigation.navigate('News', {item: items[id]})
    };

    useEffect(() => {
        fetchRssResource(RSS_URL)
            .then(rss => setItems(rss.items))
    });

    return (
        <View>
            {
                items
                    ? <NewsList items={items} handleSelectItem={handleSelectItem} />
                    : <Spinner />
            }
        </View>
    )
};
