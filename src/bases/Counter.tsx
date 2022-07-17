import { useState } from "react";

type props = {
    initialValue: number
}

export const Counter = ({ initialValue }: props) => {

    const [counter, setCounter] = useState(initialValue)

    return (<><h1>Counter: {counter}</h1>

        <button onClick={() => setCounter(prev => prev + 1)}>+ 1</button>
    </>);
};
