import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {formatDate} from '../../utils';

export const News = ({route, navigation}) => {
    const {title, published, id, enclosures} = route.params.item;

    const date = formatDate(published);

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='< Назад' onPress={() => navigation.navigate('Home')} />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.published}>{date}</Text>
                <Image style={styles.image} source={{uri: enclosures[0].url}} />

                {/* Этот вариант работает, но он не от этого задания. Пример взят из документации, только добавил стили. */}
                {/*<WebView*/}
                {/*    style={styles.webView}*/}
                {/*    source={{uri: 'https://reactnative.dev'}}*/}
                {/*    originWhitelist={['https://*', 'git://*']}*/}
                {/*    onLoadProgress={({nativeEvent}) => console.log(nativeEvent.progress)}*/}
                {/*    onLoadEnd={() => alert('loaded')}*/}
                {/*/>*/}

                {/* Это не работает, как я ни пытался заставить его рабоать. */}
                <WebView
                    style={styles.webView}
                    source={{uri: id}}
                    originWhitelist={['https://*', 'git://*']}
                    onLoadEnd={() => alert('loaded')}
                    onLoadProgress={({nativeEvent}) => console.log(nativeEvent.progress)}
                    onHttpError={({nativeEvent}) => {
                        console.warn(`WebView received error status code: ${nativeEvent.statusCode}`);
                    }}
                />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    button: {
        padding: 0
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    published: {
        color: '#777',
        fontSize: 12,
        marginBottom: 10,
    },
    webView: {
        flex: 1,
        width: '100%'
    }
});
