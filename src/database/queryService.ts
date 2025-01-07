//An object that serves to execute perpared statements and
//munge any returning data into compatable types for the UI

import databaseConnection from "./databaseConnection"
import dayjs from 'dayjs'

const queryService = {
    getAllMoments: async function(): Promise<Array<SavedMoment>>{
        let momentArray:Array<SavedMoment> = [];
        let response = await databaseConnection.execute("SELECT * FROM moment");
        if(response.rows.length > 0){
            response.rows.forEach(row => {
                momentArray.push({
                    rowId:Number(row["ROWID"]),
                    note: String(row["note"]),
                    date: String(row["date"]),
                    score: Number(row["score"])
                })
            })
        }

        return momentArray;
    },

    //TODO: Refactor to take NewMoment object
    saveNewMoment: async function(moment:NewMoment):Promise<void>{
        const insertStatement = databaseConnection.prepareStatement('INSERT INTO moment (note, date, score) VALUES (?, ?, ?)');
        if(moment.score){
            insertStatement.bind([moment.note,moment.date,moment.score])
        } else {
            insertStatement.bind([moment.note,moment.date,null]);
        }
        try{
            await insertStatement.execute();
        } catch(e){
            console.error(e)
        }
    },

    /**
     * Inserts new entry in moment table with now as current date, returns rowId
     */
    createMoment: async function():Promise<number|void>{
        const insertStatement = databaseConnection.prepareStatement('INSERT INTO moment (date) VALUES (?)');
        const defaultDate = dayjs().toISOString();
        insertStatement.bind([defaultDate]);
    
        try{
            let result = await insertStatement.execute()
            
            if(typeof result.insertId !== "number"){
                throw new Error("New moment rowId not found")
            } else {
                return result.insertId
            }
            
        } catch(e){
            console.error(e);
        }
        

        
    },
    /**
     * Deletes moment, requires rowId
     */
    deleteMoment: async function(rowId: number):Promise<void>{
        const deleteStatement = databaseConnection.prepareStatement('DELETE FROM moment where ROWID = ?');
        deleteStatement.bind([rowId.toString()]);
        try {
            const result = await deleteStatement.execute();
            return;
        } catch(e){
            console.error(e)
        }
    },

    updateMoment: async function(rowId:number, updatedProps:UpdatableMomentRows):Promise<SavedMoment|void>{
        let propArray = [];
        //build statement
        let templateStatement = "UPDATE moment SET";
        for(let key in updatedProps){
            propArray.push(updatedProps[key]);
            templateStatement += ` ${key} = ?,`

        }
        templateStatement = templateStatement.slice(0,-1);
        templateStatement += " WHERE ROWID = ?";
        
        try {
            const updateStatement = databaseConnection.prepareStatement(templateStatement);
            updateStatement.bind([...propArray, rowId.toString()])
            const result = await updateStatement.execute(); //TODO coerce into moment obj
            return result;
        } catch(e){
            console.error(e);
        }
    },

    readMoment: async function(rowId:number):Promise<SavedMoment|void>{
        const readStatement = databaseConnection.prepareStatement("SELECT * from moment where ROWID = ?");
        readStatement.bind([rowId.toString()]);
        try {
            const result = readStatement.execute(); //Todo coerce into moment obj
            return result;
        } catch(e){
            console.error(e);
            throw new Error("ERROR: could not read moment from database.");
        }
    }
}

export default queryService;