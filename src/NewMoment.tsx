import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComposeMoment from './ComposeMoment';

const Stack = createNativeStackNavigator();
function NewMoment():React.JSX.Element{
    return (
        <Stack.Navigator initialRouteName='Compose'>
            <Stack.Screen name="Compose" component={ComposeMoment}/>
        </Stack.Navigator>
    )
}

export default NewMoment;