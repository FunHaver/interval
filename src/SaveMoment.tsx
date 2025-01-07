import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import queryService from './database/queryService';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { useCurrentMoment, useCurrentMomentDispatch } from './CurrentMomentContext';

function SaveMoment():React.JSX.Element{

    const navigation = useNavigation();
    const currentMoment = useCurrentMoment()
    const dispatch = useCurrentMomentDispatch();
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
    async function saveNote(){
        //first save to context
        dispatch({
            type: "modify",
            score: vibeValue
        })
        //then save to db
        if(typeof currentMoment.rowId === "number"){
            await queryService.updateMoment(currentMoment.rowId,{score: currentMoment.score}).then(()=>{
                //@ts-ignore popToTop is a valid method
                navigation.popToTop()
            }).catch(e => {
                console.log("Error updating db");
                console.error(e);
            })
        }

    
    
  }
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
            <Button onPress={()=>saveNote()}>Save</Button>
        </View>
    )
}

export default SaveMoment;