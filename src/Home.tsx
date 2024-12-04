import React from 'react';
import { Button, PaperProvider } from 'react-native-paper';
import {
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Home(): React.JSX.Element {
  const navigation = useNavigation();
  return (
      <View>
        <Button icon="camera">
          Hi
        </Button>
        {/* navigation.navigate arg type error (still works) https://reactnavigation.org/docs/navigating
        //@ts-ignore */}
        <Button onPress={()=> navigation.navigate('Options')}> 
          Go to Options
        </Button>
      </View>
  );
}

export default Home;
