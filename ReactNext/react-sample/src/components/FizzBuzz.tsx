import React, {memo, useState} from "react";

type FizzProps = {
    isFizz: boolean,
}

const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizz is loaded, Fizz=${isFizz}`)
    return <span>{isFizz ? `Fizz` : ``}</span>
}

type BuzzProps = {
    isBuzz: boolean,
}

const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props
    console.log(`Buzz is loaded, isBuzz=${isBuzz}`)
    return <span>{isBuzz ? `Buzz` : ``}</span>
})

export const FizzBuzz = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`Parent is loaded, count=${count}`)
    return (
        <div>
            <h2>memo</h2>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}