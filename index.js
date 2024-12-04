/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import Home from './src/Home';
import Options from './src/Options';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Main(){
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{title: 'Welcome'}}/>
                        <Stack.Screen name="Options" component={Options}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
