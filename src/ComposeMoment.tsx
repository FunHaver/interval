import * as React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import queryService from './queryService';
import { View } from 'react-native';

function ComposeMoment():React.JSX.Element{
    const [text, setText] = React.useState("");
    async function saveNote(text:string){
        await queryService.saveNewMoment(text);
      }
    return(
        <View>
            <Text>Write what you want here</Text>
            <TextInput onChangeText={setText} value={text} multiline/>
            <Button onPress={()=>saveNote(text)}>Save</Button>
        </View>
    )
}

export default ComposeMoment;