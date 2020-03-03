import * as rssParser from 'react-native-rss-parser';

export const formatDate = date => date.substr(5, date.length - 14);

export const fetchRssResource = async (url) => {
    const response = await fetch(url);
    const responseData = await response.text();
    return await rssParser.parse(responseData);
};
