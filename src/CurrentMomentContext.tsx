import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';
import dayjs from 'dayjs';

const momentCtx:Moment = {
    rowId: null,
    note: '',
    date: '',
    score: null
}

const CurrentMomentContext = createContext(momentCtx);
const CurrentMomentDispatchContext = createContext(()=>{});

export function CurrentMomentProvider({children}:{children:React.JSX.Element}) {
    const [currentMoment, dispatch] = useReducer(currentMomentReducer,momentCtx)

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

export function useCurrentMomentDispatch():Function{
    return useContext(CurrentMomentDispatchContext);
}

function currentMomentReducer(moment:Moment,action:any){
    switch(action.type) {
        case 'create': {
            console.log("create action");
            //persist in momentCtx

            return {
                rowId: action.rowId, //TODO: db generated rowid
                note: '',
                date: dayjs().toISOString(),
                score: null
            };
        }
        case 'delete': {
            console.log("delete action");
            //remove from db
            return {
                rowId: null,
                note: '',
                date: '',
                score: null
            }
    
            // if(typeof moment.rowId == "number"){
            //     //await queryService.deleteMoment(moment.rowId);
            //     console.log(moment)
            // } else {
            //     throw Error(`Invalid rowId for moment: ${moment.rowId}`);
            // }
            //reset moment to -1 and blank everything
            
        }
        case 'modify': {
            console.log("modify action")
 
            let updatedMoment:any = {};
            for(let key in moment){
                if(action[key] !== undefined){
                    updatedMoment[key] = action[key]
                }
            }
            return updatedMoment;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

