import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import queryService from './database/queryService';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

function SaveMoment({route}:{route:any}):React.JSX.Element{
    async function saveNote(text:string, date: string){
        await queryService.saveNewMoment({
            rowId: null,
            note: text,
            date: new Date(date).toISOString(),
            score: vibeValue
        }).then(()=>{
            //@ts-ignore popToTop is a valid method
            navigation.popToTop();
        }).catch(e => {console.error(e)})
        
      }
        const navigation = useNavigation();
    
    const [vibeValue,setVibeValue] = React.useState(2);
    const [tags,setTags] = React.useState("");

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: 300 //do not use percentages
        },
        slider: {
            height: 40,
            width: "75%"
        },
        tagInput: {
            height: 50,
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
            <TextInput textContentType='none' style={styles.tagInput} placeholder="Tags"/>
            {
            /*@ts-ignore*/}
            <Button onPress={()=>saveNote(route.params.text, route.params.date)}>Save</Button>
        </View>
    )
}

export default SaveMoment;