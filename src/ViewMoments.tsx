import React from 'react';
import { FlatList, View, StyleSheet } from "react-native";
import MomentListItem from './MomentListItem';
import queryService from './database/queryService';

function ViewMoments(): React.JSX.Element {
    const [moments, updateMoments] = React.useState(Array<SavedMoment>);
    React.useEffect(()=>{
        //go get info here
        queryService.getAllMoments().then(result => {
            updateMoments(result)
        }).catch(e => {
            console.error(e)
        })
    },[])
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