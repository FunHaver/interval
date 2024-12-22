import React from "react";
import { StyleSheet } from "react-native";
import { Text,Card, Icon, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const MomentContext = React.createContext("0");
function MomentListItem({moment}:{moment:Moment}): React.JSX.Element {
    const navigation = useNavigation();
    function viewMoment(){
        //@ts-ignore
        navigation.navigate("Viewing Moment",{momentId:moment.rowId})
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
                    subtitle={moment.date.toISOString()}
                    left={(props) => <Text>{moment.score}</Text>}
                    right={(props)=><IconButton size={30} icon="chevron-right" onPress={()=>viewMoment()}/>}
                    style={styles.card}/>
    )
}

export default MomentListItem;