interface Moment {
    rowId: number | null;
    note: string;
    date: string;
    score: number | null;
}

interface NewMoment extends Moment {
    rowId: null;
}

interface SavedMoment extends Moment {
    rowId: number;
}

/**
 * Properties that correspond to rows that may be
 * updated by the user
 */
interface UpdatableMomentRows {
    note?:string;
    date?:string;
    score?:number | null;
    [key:string]: any;
}