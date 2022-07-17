import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";



export const useCounter = (arg1: number) => {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const timeline = useRef(gsap.timeline())

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, arg1))
    }

    useLayoutEffect(()=> {
        if(!counterElement.current) return;
        timeline.current.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
        .pause()
    },[])

    useEffect(() => {
       timeline.current.play(0)
    }, [counter])


    return {
        counter,
        counterElement,
        handleClick

    }

}