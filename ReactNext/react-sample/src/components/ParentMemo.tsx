import React, {useState, useCallback} from "react";

type ButtonProps = {
    onClick: () => void,
}

const Decrementbutton = (props: ButtonProps) => {
    const {onClick} = props

    console.log(`Decrement button is clicked.`)
    return <button onClick={onClick}>DECREMENT</button>
}

const IncrementButton = (props: ButtonProps) => {
    const {onClick} = props

    console.log(`Increment button is clicked.`)
    return <button onClick={onClick}>INCREMENT</button>
}

const DoubleButton = (props: ButtonProps) => {
    const {onClick} = props

    console.log(`Double button is clicked.`)
    return <button onClick={onClick}>DOUBLE</button>
}

export const ParentMemo = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((c) => c-1)
    }
    const increment = () => {
        setCount((c) => c+1)
    }
    const double = useCallback(() => {
        setCount((c) => c * 2)
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <Decrementbutton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}
