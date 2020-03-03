import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navbar, Home, News} from './src/components';
import {WebView} from 'react-native-webview';

const Stack = createStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Navbar />
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="News" component={News} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
