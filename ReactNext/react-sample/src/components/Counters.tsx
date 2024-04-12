import { useReducer } from "react";

type Action = `INCREMENT` | `DECREMENT` | `DOUBLE` | `RESET`

const reducer = (currentCount: number, action: Action) => {
    switch(action) {
        case `INCREMENT`:
            return currentCount + 1
        case `DECREMENT`:
            return currentCount - 1
        case `DOUBLE`:
            return currentCount * 2
        case `RESET`:
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initialValue: number,
}

const Counters = (props: CounterProps) => {
    const {initialValue} = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Counters: {count}</p>
            <button onClick={() => dispatch(`RESET`)}>RESET</button>
            <button onClick={() => dispatch(`DECREMENT`)}>-</button>
            <button onClick={() => dispatch(`INCREMENT`)}>+</button>
            <button onClick={() => dispatch(`DOUBLE`)}>*2</button>
        </div>
    )
}

export default Counters
