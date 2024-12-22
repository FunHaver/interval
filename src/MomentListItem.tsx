import React from "react";
import { StyleSheet } from "react-native";
import { Text,Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function MomentListItem({moment}:{moment:SavedMoment}): React.JSX.Element {
    const navigation = useNavigation();
    function viewMoment(){

        //@ts-ignore
        navigation.navigate("Viewing Moment",{moment:moment})
    }
    const styles = StyleSheet.create({

        card: {
            marginBottom: 10,
            borderColor: "#AAA",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 5
        }
    })
    const cardTitle = moment.note.slice(0,10) + "...";
    return(
                <Card.Title
                    title={cardTitle}
                    subtitle={moment.date}
                    left={(props) => <Text>{moment.score}</Text>}
                    right={(props)=><IconButton size={30} icon="chevron-right" onPress={()=>viewMoment()}/>}
                    style={styles.card}/>
    )
}

export default MomentListItem;