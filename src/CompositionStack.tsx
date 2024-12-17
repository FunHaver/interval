import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComposeMoment from './ComposeMoment';
import SaveMoment from './SaveMoment';

const Stack = createNativeStackNavigator();
function CompositionStack():React.JSX.Element {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Compose" component={ComposeMoment}/>
            <Stack.Screen name="Save" component={SaveMoment} />
        </Stack.Navigator>
    )
}

export default CompositionStack;