import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button, PaperProvider } from 'react-native-paper';
function Options(): React.JSX.Element {
    const navigation = useNavigation();
    return(
                <View>
                    <Text>Options Screen</Text>
                    <Button onPress={()=>navigation.goBack()}>
                        Back
                    </Button>
                </View>
    )
}

export default Options;