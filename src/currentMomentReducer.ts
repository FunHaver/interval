import queryService from "./database/queryService";

export default function currentMomentReducer(moment:Moment,action:any):Moment{
    switch(action.type) {
        case 'create': {
            //save to db
            //persist in momentCtx
        }
        case 'delete': {
            //remove from db
            if(typeof moment.rowId == "number"){
                queryService.deleteMoment(moment.rowId);
            } else {
                throw Error(`Invalid rowId for moment: ${moment.rowId}`);
            }
            //reset momentCtx to -1 and blank everything
            
        }
        case 'modify': {
            //update db
            //refresh ctx copy from db
        }
        case 'read': {
            //read moment with corresponding rowid from db
            //replace old ctx moment with newly read one
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
    return {
        rowId: -1,
        note: '',
        date: '',
        score: null
    }
}