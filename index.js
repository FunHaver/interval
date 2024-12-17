/**
 * @format
 */
import './gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import initializeDatabase from './src/initializeDatabase';
import {name as appName} from './app.json';
import { PaperProvider, MD3LightTheme as DefaultTheme, Icon} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


initializeDatabase().catch(e => {
    console.error(e);
})

const Drawer = createDrawerNavigator();

function RootStack(){
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen  name="Home" 
                            component={Home}
                            options={{drawerIcon:()=> {return <Icon source="pencil"/>}}}/>
        </Drawer.Navigator>
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
