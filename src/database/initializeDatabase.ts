import databaseConnection from "./databaseConnection";

export default async function initializeDatabase():Promise<void> {
    //see if data already exists (schema check)
    let tables = await databaseConnection.executeRaw(`PRAGMA main.table_list(interval);`)
    //if no schema, create new db
    if(tables.length === 0){
        //TODO store db metadata (e.g. schema version) in some sort of manifest
        await databaseConnection.execute("CREATE TABLE interval (ROWID INTEGER PRIMARY KEY, schema INTEGER NOT NULL)");
        await databaseConnection.execute("INSERT INTO interval (schema) VALUES(1)");
        //In this house we use ISO8601 strings
        await databaseConnection.execute("CREATE TABLE moment (ROWID INTEGER PRIMARY KEY, note TEXT, date TEXT NOT NULL, score INTEGER)") 
    }
    //else if db_schema < expected_schema, migrate
    //else if db_schema > expected_schema, throw error
    //else we're good
}

