import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const maximunCount = 10;

interface props {
    initialValue: number
}

export const CounterEffect = ({ initialValue }: props) => {

    const [counter, setCounter] = useState(initialValue)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maximunCount))
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log("Se llego al valor maximo")
        const timeline = gsap.timeline()
        timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })


    }, [counter])


    return (
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>+ 1</button>
        </>
    );
};
