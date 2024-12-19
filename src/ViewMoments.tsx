import React from 'react';
import { FlatList, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MomentListItem from './MomentListItem';
import ViewingMoment from './ViewingMoment';
//mockdata
const moments:Array<Moment> = [
    {
        "rowId": 0,
        "note": "My first moment. Look at me woo",
        "date": "2024-12-10T10:55:58.145Z",
        "score": null
    },
    {
        "rowId": 1,
        "note": "Love to do this second moment. Putting a score here.",
        "date": "2024-12-11T12:55:58.145Z",
        "score": 2
    },
    {
        "rowId": 2,
        "note": "Had a bad day.",
        "date": "2024-12-14T09:55:58.145Z",
        "score": 0
    },
    {
        "rowId": 3,
        "note": "Had a good day",
        "date": "2024-12-18T16:55:58.145Z",
        "score": 4
    }
]
function ViewMoments(): React.JSX.Element {
    const styles = StyleSheet.create({
        list: {
            marginLeft: 10,
            marginRight:10
        }
    })
    return(
        <View style={{flex:1, justifyContent:"center"}}>
            <FlatList
                data={moments}
                renderItem={({item}) => <MomentListItem moment={item}/>}
                keyExtractor={item=>item.rowId.toString()} 
                style={styles.list}/>
        </View>
    )
}

export default ViewMoments;