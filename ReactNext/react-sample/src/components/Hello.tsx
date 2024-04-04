const Hello = () => {
    const onClick = () => {
        window.alert(`hello`);
    }

    const text = `hello, React`;

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello
