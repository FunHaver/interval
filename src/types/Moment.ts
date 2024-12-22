interface Moment {
    rowId: number | null;
    note: string;
    date: Date;
    score: number | null;
}

interface NewMoment extends Moment {
    rowId: null;
}

interface SavedMoment extends Moment {
    rowId: number;
}