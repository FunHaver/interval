//An object that serves to execute perpared statements and
//munge any returning data into compatable types for the UI

import databaseConnection from "./databaseConnection"

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
    }
}

export default queryService;