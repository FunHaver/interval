//An object that serves to execute perpared statements and
//munge any returning data into compatable types for the UI

import databaseConnection from "./databaseConnection"

const queryService = {
    getAllMoments: async function(): Promise<Array<Moment>>{
        let momentArray:Array<Moment> = [];
        let response = await databaseConnection.execute("SELECT * FROM moment");
        if(response.rows.length > 0){
            response.rows.forEach(row => {
                momentArray.push({
                    rowid:Number(row["ROWID"]),
                    note: String(row["note"]),
                    date: new Date(String(row["date"])),
                    score: Number(row["score"])
                })
            })
        }

        return momentArray;
    },

    saveNewMoment: async function(note:string, score?:number):Promise<void>{
        const insertStatement = databaseConnection.prepareStatement('INSERT INTO moment (note, date, score) VALUES (?, ?, ?)');
        if(score){
            insertStatement.bind([note,new Date().toISOString(),score])
        } else {
            insertStatement.bind([note,new Date().toISOString(),null]);
        }
        try{
            await insertStatement.execute();
        } catch(e){
            console.error(e)
        }
    }
}

export default queryService;