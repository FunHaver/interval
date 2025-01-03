import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useCurrentMomentDispatch } from './CurrentMomentContext';
import queryService from './database/queryService';
function Home():React.JSX.Element {
  const navigation = useNavigation();
  const dispatch = useCurrentMomentDispatch();
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
        const newMomentRowId = await queryService.createMoment();
        dispatch({type:"create", rowId: newMomentRowId})
        //@ts-ignore valid method signature
        navigation.navigate("ComposeMoment");
      
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
