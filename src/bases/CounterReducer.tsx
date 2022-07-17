import { useReducer } from "react";

interface counterState {
    counter: number;
    previous: number;
    changes: number;

}

const initialState: counterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type counterAction =
    {
        type: 'IncreaseBy',
        payload: { value: number }
    } |
    {
        type: 'reset'
    }




const counterReducer = (state: counterState, action: counterAction): counterState => {

    const { counter, changes } = state

    switch (action.type) {
        case 'IncreaseBy':
            return {
                previous: counter,
                counter: counter + action.payload.value,
                changes: changes + 1,
            }

        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        default:
            return state

    }

}

export const CounterReducer = () => {

    const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    const increaseBy = (value: number) => {
        console.log(value)
        dispatch({ type: 'IncreaseBy', payload: { value } })
    }


    return (<><h1>Counter Reducer: {counter}</h1>

        <button onClick={() => increaseBy(1)}>+ 1</button>
        <button onClick={() => increaseBy(5)}>+ 5</button>
        <button onClick={() => increaseBy(10)}>+ 10</button>
        <button onClick={handleReset}>Reset</button>

    </>);
};
