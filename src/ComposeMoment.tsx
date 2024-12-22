import * as React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';

function ComposeMoment():React.JSX.Element{
    const [text, setText] = React.useState("");
    const [date, setDate] = React.useState(dayjs().toDate());
    const [showPicker, setPickerVisibility] = React.useState(false);
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        textField: {
            width: "100%",
            height: 300 //do not use percentages RN Paper: Currently we support only numbers in height prop [Component Stack]
        }

    })
    function continueToSave(){
        //@ts-ignore
        navigation.navigate("SaveMoment", {text: text, date:date.toString()})

    }
    return(
        <View>
            <Button onPress={()=>setPickerVisibility(true)}>
                <Text>{date.toDateString()}</Text>
            </Button>
            <View style={{display:showPicker ? 'flex':'none'}}>
                <DateTimePicker mode={"single"} date={date} onChange={(params:any) => setDate(params.date.toDate())}/>
                <Button onPress={()=>{setPickerVisibility(false)}}>Confirm</Button>
            </View>
            <TextInput textContentType='none' style={styles.textField} placeholder="My Moment" onChangeText={setText} value={text} multiline/>
            {
            /*@ts-ignore*/}
            <Button onPress={()=>continueToSave()}>Continue</Button>
        </View>
    )
}

export default ComposeMoment;