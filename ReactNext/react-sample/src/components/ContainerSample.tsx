type ContainerProps = {
    title: string,
    children: React.ReactNode,
}

const Container = (porps: ContainerProps): JSX.Element => {
    const {title, children} = porps

    return (
        <div style={{background: `red`}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>THIS AREA IS SURROUNDED BY RED.</p>
        </Container>
    )
}

export default Parent
