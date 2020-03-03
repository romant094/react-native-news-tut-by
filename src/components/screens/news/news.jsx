import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {formatDate} from '../../utils';
import {Spinner} from '../../spinner';

export const News = ({route, navigation}) => {
    const [loading, setLoading] = useState(false);
    const [loadProgress, setLoadingProgress] = useState(0);

    const {title, published, id} = route.params.item;
    const date = formatDate(published);

    // if (loading || loadProgress < 100) {
    //     return (
    //         <View style={{alignItems: 'center'}}>
    //             <View style={styles.buttonContainer}>
    //                 <Button style={styles.button} title='< Назад' onPress={() => navigation.navigate('Home')} />
    //             </View>
    //             <Spinner />
    //             <Text>Progress: {loadProgress}%</Text>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='< Назад' onPress={() => navigation.navigate('Home')} />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.published}>{date}</Text>
                {/*<Image style={styles.image} source={{uri: imgUrl}} />*/}
                <WebView
                    style={styles.webView}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                    onLoadProgress={({nativeEvent}) => {
                        console.log(nativeEvent.progress)
                    }}
                    source={{uri: id}}
                    onHttpError={syntheticEvent => {
                        const {nativeEvent} = syntheticEvent;
                        console.warn(
                            'WebView received error status code: ',
                            nativeEvent.statusCode,
                        );
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
        width: '100%',
        height: 500
    }
});
