import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from 'react-native-paper';
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