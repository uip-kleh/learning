import { useState } from "react";


type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps): JSX.Element => {
    const { initialValue } = props
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count * 2)}>*2</button>
            <button onClick={() => setCount(count ** 2)}>**2</button>
        </div>
    )
}

export default Counter
