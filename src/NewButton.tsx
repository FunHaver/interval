import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

function NewButton():React.JSX.Element {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        newMomentButton: {
          borderWidth: 10,
          borderColor: "#4E1ABD",
          borderStyle: "solid",
          height: 100,
          width: 100,
          borderRadius: 100
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
      })
    return(
        <View style={styles.container}>
        {
            /*@ts-ignore*/}
            <IconButton icon="pencil" style={styles.newMomentButton} size={50} onPress={()=>{navigation.navigate("CompositionStack")}}/>
        </View>
    )
}

export default NewButton;