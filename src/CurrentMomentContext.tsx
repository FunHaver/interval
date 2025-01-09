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
            return {
                rowId: null,
                note: '',
                date: dayjs().toISOString(),
                score: null
            };
        }
        case 'delete': {
            //remove from db
            return {
                rowId: null,
                note: '',
                date: '',
                score: null
            }
        }
        case 'modify': {
            debugger;
            for(let key in moment){
                if(action[key] !== undefined){
                    moment[key] = action[key]
                } 
            }
            return moment;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

