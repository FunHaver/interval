/**
 * @format
 */
import './gesture-handler';
import * as React from 'react';
import {AppRegistry, Button} from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import initializeDatabase from './src/database/initializeDatabase';
import {name as appName} from './app.json';
import DrawerStack from './src/DrawerStack';
import ComposeMoment from './src/ComposeMoment';
import SaveMoment from './src/SaveMoment';
import ViewingMoment from './src/ViewingMoment';
import ComposeBackButton from './src/ComposeBackButton';
import { CurrentMomentProvider } from './src/CurrentMomentContext';
initializeDatabase().catch(e => {
    console.error(e);
})



const Stack = createNativeStackNavigator();
function RootStack(){
    
    return(
    <Stack.Navigator initialRouteName='MainNav'>
        <Stack.Screen options={{headerShown: false}} name="MainNav" component={DrawerStack} />
        <Stack.Screen options={{keyboardHandlingEnabled:true, 
                                headerBackVisible: false, 
                                headerLeft:()=>{
                                    return <ComposeBackButton/>
                                }}} name="ComposeMoment" component={ComposeMoment}/>
        <Stack.Screen options={{keyboardHandlingEnabled:true}} name="SaveMoment" component={SaveMoment} />        
        <Stack.Screen name="Viewing Moment" component={ViewingMoment} />
      </Stack.Navigator>  
    )
}

export default function Main(){
    
    return (
        <PaperProvider theme={DefaultTheme}>
            <CurrentMomentProvider>
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </CurrentMomentProvider>
        </PaperProvider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
