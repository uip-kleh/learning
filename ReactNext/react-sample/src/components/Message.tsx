const Text = (props: {content: any}) => {
    const {content} = props
    return <p className="text">{content}</p>
}

const Message = (props: {}) => {
    const content1 = `this is parent component`
    const content2 = `message uses text component`

    return (
        <div>
            <p>Message</p>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message
