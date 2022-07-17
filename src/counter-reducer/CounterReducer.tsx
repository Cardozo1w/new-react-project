import { useReducer } from "react";
import { counterAction, counterState, doReset } from "./interfaces/interfaces";
import { counterReducer } from "./state/CounterReducer";

const initialState: counterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}


export const CounterReducer = () => {

    const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

    const handleReset = () => {
        dispatch(doReset())
    }

    const increaseBy = (value: number) => {
        dispatch({ type: 'IncreaseBy', payload: { value } })
    }


    return (<><h1>Counter Reducer Segmentado: {counter}</h1>

        <button onClick={() => increaseBy(1)}>+ 1</button>
        <button onClick={() => increaseBy(5)}>+ 5</button>
        <button onClick={() => increaseBy(10)}>+ 10</button>
        <button onClick={handleReset}>Reset</button>

    </>);
};
