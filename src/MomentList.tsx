import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import queryService from './queryService';

function MomentList(): React.JSX.Element {
    const [data, updateData] = React.useState(Array<Moment>);
    React.useEffect(()=>{
        //go get info here
        queryService.getAllMoments().then(result => {
            updateData(result)
        }).catch(e => {
            console.error(e)
        })
    },[])


    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => 
                    <>
                        <Text>{item.rowid}</Text>
                        <Text>{item.note}</Text>
                    </>
                }/>
        </View>
    )
}

export default MomentList;