import { open, IOS_DOCUMENT_PATH, ANDROID_DATABASE_PATH } from "@op-engineering/op-sqlite";
import { Platform } from "react-native";

//There is only ever one db connection, so this is a singleton

const databaseConnection = (open({
        name:'db.sqlite',
        location: Platform.OS === 'ios' ? IOS_DOCUMENT_PATH : ANDROID_DATABASE_PATH
        }))
    
export default databaseConnection;