import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import queryService from './database/queryService';

function SaveMoment():React.JSX.Element{
    async function saveNote(text:string){
        await queryService.saveNewMoment(text);
      }
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%"
        }
    })
    return(
        <View style={styles.container}>
            <Text>Vibe</Text>
            <Text>Tags</Text>
            <Button>Save</Button>
        </View>
    )
}

export default SaveMoment;