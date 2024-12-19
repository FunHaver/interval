/**
 * @format
 */
import './gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme, Icon, IconButton} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import initializeDatabase from './src/database/initializeDatabase';
import {name as appName} from './app.json';

import Home from './src/Home';
import ViewMoments from './src/ViewMoments';
import Settings from './src/Settings';
import ExportData from './src/ExportData';


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
            <Drawer.Screen  name="View Moments" 
                            component={ViewMoments}
                            options={{
                                drawerIcon:()=> {return <Icon source="book-open-variant"/>},
                                headerRight: () => {return <IconButton icon="filter-variant"/>}
                            }}/>
            <Drawer.Screen  name="Settings" 
                            component={Settings}
                            options={{drawerIcon:()=> {return <Icon source="tune-variant"/>}}}/>
            <Drawer.Screen  name="Export Data" 
                            component={ExportData}
                            options={{drawerIcon:()=> {return <Icon source="export"/>}}}/>
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
