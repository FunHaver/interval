import * as React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
import { useCurrentMoment, useCurrentMomentDispatch } from './CurrentMomentContext';
import queryService from './database/queryService';

function ComposeMoment():React.JSX.Element{
    const currentMoment = useCurrentMoment();
    const dispatch = useCurrentMomentDispatch();
    const [text, setText] = React.useState(currentMoment.note);
    const [date, setDate] = React.useState(currentMoment.date);
    const [showPicker, setPickerVisibility] = React.useState(false);
    const navigation = useNavigation();


    const styles = StyleSheet.create({
        textField: {
            width: "100%",
            height: 300 //do not use percentages RN Paper: Currently we support only numbers in height prop [Component Stack]
        }

    })
    async function continueToSave(){
        dispatch({
            type: "modify",
            note: text,
            date: date
        })
        if(typeof currentMoment.rowId === "number"){
            await queryService.updateMoment(currentMoment.rowId,{note: text,date:date}).then(()=>{
                //@ts-ignore
                navigation.navigate("SaveMoment");
            }).catch(e => {
                console.log("Error updating db");
                console.error(e);
            })
        }


    }

    return(
        <View>
            <Button onPress={()=>setPickerVisibility(true)}>
                <Text>{date}</Text>
            </Button>
            <View style={{display:showPicker ? 'flex':'none'}}>
                <DateTimePicker mode={"single"} date={dayjs(date)} onChange={(params:any) => setDate(params.date.toISOString())}/>
                <Button onPress={()=>{setPickerVisibility(false)}}>Confirm</Button>
            </View>
            <TextInput textContentType='none' style={styles.textField} placeholder="My Moment" onChangeText={text=>setText(text)} value={text} multiline/>
            {
            /*@ts-ignore*/}
            <Button onPress={()=>continueToSave()}>Continue</Button>
        </View>
    )
}

export default ComposeMoment;