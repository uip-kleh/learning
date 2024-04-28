import React, {useContext} from "react";

type User = {
    id: number,
    name: string,
}

const UserCotext = React.createContext<User | null>(null)

const GrandChild = () => {
    const user = useContext(UserCotext)
    return user !== null ? <p>hello, {user.name}</p> : null
}


const Child = () => {
    const now = new Date()
    return (
        <div>
            <p>Current: {now.toLocaleDateString()}</p>
            <GrandChild />
        </div>
    )
}


export const UseContextSample = () => {
    const user: User = {
        id: 1,
        name: `Alice`,
    }

    return (
        <UserCotext.Provider value={user}>
            <Child />
        </UserCotext.Provider>
    )
}
