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
        console.log("deleting")
        const deleteStatement = databaseConnection.prepareStatement('DELETE FROM moment where ROWID = ?');
        deleteStatement.bind([rowId.toString()]);
        try {
            const result = await deleteStatement.execute();
            console.log(result)
        } catch(e){
            console.error(e)
        }
    }
}

export default queryService;