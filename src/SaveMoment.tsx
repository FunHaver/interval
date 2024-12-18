import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import queryService from './database/queryService';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

function SaveMoment():React.JSX.Element{
    async function saveNote(text:string){
        await queryService.saveNewMoment(text);
      }
        const navigation = useNavigation();
    
    const [vibeValue,setVibeValue] = React.useState(2);
    const [tags,setTags] = React.useState("");
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%"
        },
        slider: {
            height: 40,
            width: "75%"
        },
        tagInput: {
            maxHeight: 50,
            width: "75%"
        }
    })
    return(
        <View style={styles.container}>
            <Text>Vibe</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={4}
                step={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={vibeValue}
                onSlidingComplete={(newVibe:number)=>{setVibeValue(newVibe)}}
            />
            <Text>Tags</Text>
            <TextInput style={styles.tagInput} placeholder="Tags"/>
            {
            /*@ts-ignore*/}
            <Button onPress={()=>navigation.reset({index:0, routes:[{name:"Home"},{name:"View Moments"},{name:"Settings"},{name:"Export Data"}]})}>Save</Button>
        </View>
    )
}

export default SaveMoment;