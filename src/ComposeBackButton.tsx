import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCurrentMoment, useCurrentMomentDispatch } from "./CurrentMomentContext";
import queryService from "./database/queryService";
function ComposeBackButton():React.JSX.Element {
    const navigation = useNavigation();
    const momentContext = useCurrentMoment();
    const dispatch = useCurrentMomentDispatch();
    async function cancelMomentCreation(){
            if(typeof momentContext.rowId === "number"){
                await queryService.deleteMoment(momentContext.rowId)
                //dispatch delete current moment
                navigation.goBack();
            } else {
                throw new Error("Current moment context does not have ROWID");
            }
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