import React from 'react';
import {Modal, Portal, Button, TextInput, PaperProvider, useTheme, Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import databaseConnection from './databaseConnection';
let mysch:string | undefined;

databaseConnection.execute("SELECT schema from interval").then(result=> {
  mysch = result.rows[0]["schema"]?.toString();
})

function Home(): React.JSX.Element {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
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
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary
    },
    momentModal: {
      flex:1,
      backgroundColor: theme.colors.background
    }
  })


  return (
    <View style={styles.parentView}>
    <Portal>
      <Modal style={styles.momentModal} visible={visible} onDismiss={hideModal}>
        <Text>Write what you want here</Text>
        <TextInput multiline/>
        <Button>Save</Button>
      </Modal>
    </Portal>
      
        <Button style={styles.newMomentButton} mode="contained" onPress={()=>showModal()}>
          Hello
        </Button>
        <Text>
          {mysch}
        </Text>

      </View>
  );
}

export default Home;
