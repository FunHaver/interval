import React from 'react';
import {Modal, Portal, Button, TextInput, useTheme, Text, IconButton } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import databaseConnection from './databaseConnection';
import queryService from './queryService';
let mysch:string | undefined;

function Home(): React.JSX.Element {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [schema, setSchema] = React.useState('');
  const [text, setText] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const theme = useTheme()
  const styles = StyleSheet.create({
    parentView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background
    },
    newMomentButton: {
      borderWidth: 10,
      borderColor: "#4E1ABD",
      borderStyle: "solid",
      height: 100,
      width: 100,
      borderRadius: 100
    },
    momentModal: {
      flex:1,
      backgroundColor: theme.colors.background
    }
  })

  async function saveNote(text:string){
    await queryService.saveNewMoment(text);
  }
  return (
    <View style={styles.parentView}>
    <Portal>
      <Modal style={styles.momentModal} visible={visible} onDismiss={hideModal}>
        <Text>Write what you want here</Text>
        <TextInput onChangeText={setText} value={text} multiline/>
        <Button onPress={()=>saveNote(text)}>Save</Button>
      </Modal>
    </Portal>
      
        <IconButton icon="pencil" style={styles.newMomentButton} size={50} onPress={()=>showModal()}>
        </IconButton>
        {
        /*@ts-ignore navigation.navigate takes a string, it's in the docs: https://reactnative.dev/docs/navigation*/ }
        {/* <Button mode="contained" onPress={()=>navigation.navigate("Moments")}>
          View moments
        </Button> */}

      </View>
  );
}

export default Home;
