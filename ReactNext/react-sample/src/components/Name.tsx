import React from "react";

const Name = () => {
    const onChane = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <div style={{padding: `16px`, backgroundColor: `gray`}}>
            <label htmlFor="name">Name</label>
            <input id="name" className="input" type="text" onChange={onChane} />
        </div>
    )
}

export default Name
