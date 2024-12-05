/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import Home from './src/Home';
import {name as appName} from './app.json';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Main(){
    return (
        <PaperProvider theme={DefaultTheme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#ffffff"
                                }
                            }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
