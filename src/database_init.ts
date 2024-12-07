import { open, IOS_DOCUMENT_PATH, ANDROID_DATABASE_PATH, DB } from "@op-engineering/op-sqlite";
import { Platform } from "react-native";

async function initialize_db():Promise<DB> {
    const db = open({
        name:'db.sqlite',
        location: Platform.OS === 'ios' ? IOS_DOCUMENT_PATH : ANDROID_DATABASE_PATH
    })
    //see if data already exists (schema check)
    let tables = await db.executeRaw(`PRAGMA main.table_list(interval);`)
    console.log(tables)
    //if no schema, create new db
    if(tables.length === 0){
        await db.execute("CREATE TABLE interval (id INTEGER PRIMARY KEY, schema INTEGER NOT NULL)");
        await db.execute("INSERT INTO interval (id,schema) VALUES(1,1)");
    }
    //else if db_schema < expected_schema, migrate
    //else if db_schema > expected_schema, throw error
    //else start up with the good db
    let dataInfo = await db.execute("SELECT * FROM interval");
    console.log(dataInfo);
    return db;
}


export default initialize_db;