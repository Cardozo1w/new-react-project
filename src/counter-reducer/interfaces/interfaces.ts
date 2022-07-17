export interface counterState {
    counter: number;
    previous: number;
    changes: number;

}


export type counterAction =
    {
        type: 'IncreaseBy',
        payload: { value: number }
    } |
    {
        type: 'reset'
    }


    export const doReset = ():counterAction => ({type: 'reset' })