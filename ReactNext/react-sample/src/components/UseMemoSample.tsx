import React, {useState, useMemo} from "react";

export const UseMemoSample = () => {
    const [text, setText] = useState<string>(``)
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            return [...prevItems, text]
        })
        console.log(items)
        setText(``)
    }

    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <h2>UseMemoSample</h2>
            <div>
                <input value={text} onChange={onChangeInput}></input>
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                string[]: {items.join(`, `)}
            </div>
            <div>
                <p>numberOfCharacters1: {numberOfCharacters1}</p>
                <p>numberOfCharacters2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}