import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useCurrentMoment } from "./CurrentMomentContext";
function ViewingMoment():React.JSX.Element{
    const moment:Moment = useCurrentMoment()

    const styles = StyleSheet.create({
        container: {
            marginLeft: 10,
            marginRight: 10
        },
        heading:{
            display:'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            paddingTop: 10,
            paddingBottom: 10
        },
        bodyText: {
            fontSize: 16
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text>{moment.date}</Text>
                <Text>Vibes {moment.score}</Text>
            </View>
            <View>
                <Text style={styles.bodyText}>{moment.note}</Text>
            </View>
        </View>
    ) 
}

export default ViewingMoment;