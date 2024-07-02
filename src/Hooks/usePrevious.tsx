import {useRef} from "react"

const usePrevious = (val: any) => {
    const currentRef = useRef(val);
    const prevRef = useRef();

    if (currentRef.current !== val) {
        prevRef.current = currentRef.current;
        currentRef.current = val;
    }
    return prevRef.current
}

export {usePrevious};