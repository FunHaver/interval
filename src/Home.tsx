import React from 'react';
import ComposeMoment from './ComposeMoment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewButton from './NewButton';
import SaveMoment from './SaveMoment';
import CompositionStack from './CompositionStack';
const Stack = createNativeStackNavigator();
function Home(): React.JSX.Element {

  return (
      <Stack.Navigator screenOptions={{presentation:'modal',headerShown: false}} initialRouteName='New'>
        <Stack.Screen options={{headerShown: false}} name="New" component={NewButton} />
        <Stack.Screen options={{headerShown: false}} name="CompositionStack" component={CompositionStack} />
      </Stack.Navigator>    
  );
}

export default Home;
