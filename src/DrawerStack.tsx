import * as React from 'react';
import {Icon, IconButton } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import ViewMoments from './ViewMoments';
import Settings from './Settings';
import ExportData from './ExportData';
const Drawer = createDrawerNavigator();
function DrawerStack():React.JSX.Element{
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen  name="Home" 
                            component={Home}
                            options={{drawerIcon:()=> {return <Icon size={20}  source="pencil"/>}}}/>
            <Drawer.Screen  name="View Moments" 
                            component={ViewMoments}
                            options={{
                                drawerIcon:()=> {return <Icon size={20} source="book-open-variant"/>},
                                headerRight: () => {return <IconButton icon="filter-variant"/>}
                            }}/>
            <Drawer.Screen  name="Settings" 
                            component={Settings}
                            options={{drawerIcon:()=> {return <Icon size={20}  source="tune-variant"/>}}}/>
            <Drawer.Screen  name="Export Data" 
                            component={ExportData}
                            options={{drawerIcon:()=> {return <Icon size={20}  source="export"/>}}}/>
        </Drawer.Navigator>
    )
}

export default DrawerStack