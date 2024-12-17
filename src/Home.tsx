import React from 'react';
import ComposeMoment from './ComposeMoment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewButton from './NewButton';
const Stack = createNativeStackNavigator();
function Home(): React.JSX.Element {

  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='New'>
        <Stack.Screen name="New" component={NewButton} />
        <Stack.Screen name="Compose" component={ComposeMoment}/>
      </Stack.Navigator>    
  );
}

export default Home;
