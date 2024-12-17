import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewButton from './NewButton';
import CompositionStack from './CompositionStack';
const Stack = createNativeStackNavigator();
function Home(): React.JSX.Element {

  return (
      <Stack.Navigator screenOptions={{presentation:'modal'}} initialRouteName='New'>
        <Stack.Screen options={{headerShown: false}} name="New" component={NewButton} />
        <Stack.Screen options={{headerShown: false}} name="CompositionStack" component={CompositionStack} />
      </Stack.Navigator>    
  );
}

export default Home;
