import React from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
function ViewingMoment({route}:{route:any}):React.JSX.Element{
    const {momentId} = route.params;
    return(
        <View>
            <Text>Viewing Moment</Text>
            <Text>{momentId}</Text>
        </View>
    )
}

export default ViewingMoment;