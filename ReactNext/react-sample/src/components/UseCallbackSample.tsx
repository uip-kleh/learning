import React, {useCallback, useState} from "react";

type ButtonProps = {
    onClick: () => void,
}

const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props
    console.log(`Decrement is loaded.`)
    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo<ButtonProps>((props) => {
    const {onClick} = props
    console.log(`Increment is loaded.`)
    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo<ButtonProps>((props) => {
    const {onClick} = props
    console.log(`Double is loaded.`)
    return <button onClick={onClick}>Double</button>
})

export const UseCallbackSample = () => {
    const [count, setCount] = useState(0)

    console.log(`Parent is loaded.`)
    const decrement = () => setCount(count - 1)
    const increase = () => setCount(count + 1)
    const double = useCallback(() => {
        setCount((c) => c * 2)
    }, [])

    return (
        <div>
            <h2>useCallback</h2>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increase} />
            <DoubleButton onClick={double} />
        </div>
    )
} 
