import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import queryService from './database/queryService';

function Home():React.JSX.Element {
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
    async function newMoment(){
      await queryService.createMoment().then(rowId => {
        //@ts-ignore
        navigation.navigate("ComposeMoment",{rowId:rowId})
      }).catch(e => {
        console.error(e);
        //@ts-ignore popToTop is a valid method
        navigation.popToTop();
      })
    }
  return(
      <View style={styles.container}>
      {
          /*@ts-ignore*/}
          <IconButton icon="pencil" style={styles.newMomentButton} size={50} onPress={()=>newMoment()}/>
      </View>
  )
}


export default Home;
