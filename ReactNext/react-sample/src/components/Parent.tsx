import React, {memo, useState} from "react";

// Fizz is always reloaded when Parent is reloaded
type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const {isFizz} = props
    console.log(`Fiszz is reloaded. isFizz=${isFizz}`)
    return <span>{isFizz ? `Fizz` : ``}</span>
}

type BuzzProps = {
    isBuzz: boolean,
    onClick: () => void,
}

// Buzz is not always reloaded when Parent is reloaded
const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz, onClick} = props
    console.log(`Buzz is reloaded. isBuzz=${isBuzz}`)
    return (
        <span onClick={onClick}>{isBuzz ? `Buzz` : ``}</span>
    )
})

export const FizzBuzzParent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0  // boolean
    const isBuzz = count % 5 === 0  // boolean
    // console.log(`isFizz: ${isFizz}, isBuzz: ${isBuzz}`)

    const onBuzzClick = () => {
        console.log(`Buzz is clicked.`)
    }
    console.log(`Parent is reloaded. count: ${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`Current Count: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}
