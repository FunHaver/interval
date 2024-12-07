/**
 * @format
 */
import * as React from 'react';
import {AppRegistry, Platform} from 'react-native';
import Home from './src/Home';
import initialize_db from './src/database_init';
import {name as appName} from './app.json';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

let db = null;

initialize_db().then(result =>{
    db = result;
}).catch(error => console.error(error))


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
