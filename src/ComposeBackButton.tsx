import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ComposeBackButton():React.JSX.Element {
    const navigation = useNavigation();
    
    async function cancelMomentCreation(){
            //dispatch delete current moment
            navigation.goBack();


    }
    return (
        <View>
        <Button 
            onPress={()=>cancelMomentCreation()}
            title="Cancel"/>
        </View>
    )
}

export default ComposeBackButton;