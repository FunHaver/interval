/**
 * @format
 */
import * as React from 'react';
import {AppRegistry, Platform} from 'react-native';
import Home from './src/Home';
import initializeDatabase from './src/initializeDatabase';
import {name as appName} from './app.json';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MomentList from './src/MomentList';

initializeDatabase().catch(e => {
    console.error(e);
})

const Stack = createNativeStackNavigator();

function RootStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: "#ffffff"
                    }
                }}/>
            <Stack.Screen
                name="Moments"
                component={MomentList}
                />
        </Stack.Navigator>
    )
}

export default function Main(){
    return (
        <PaperProvider theme={DefaultTheme}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </PaperProvider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
