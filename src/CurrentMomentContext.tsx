import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';
import queryService from './database/queryService';
const CurrentMomentContext = createContext(null);
const CurrentMomentDispatchContext = createContext(null);
const defaultMoment:Moment = {
    rowId: null,
    note: '',
    date: '',
    score: null
}
export function CurrentMomentProvider({children}:{children:React.JSX.Element}) {
    const [currentMoment, dispatch] = useReducer(currentMomentReducer,defaultMoment)

    return (
        <>
        {/* @ts-ignore*/}
        <CurrentMomentContext.Provider value={currentMoment}>
            {/* @ts-ignore*/}
            <CurrentMomentDispatchContext.Provider value={dispatch}>
                {children}
            </CurrentMomentDispatchContext.Provider>
        </CurrentMomentContext.Provider>
        </>
    )
}

export function useCurrentMoment(){
    return useContext(CurrentMomentContext);
}

export function useCurrentMomentDispatch(){
    return useContext(CurrentMomentDispatchContext);
}

function currentMomentReducer(moment:Moment,action:any):Moment{
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
    return defaultMoment;
}

