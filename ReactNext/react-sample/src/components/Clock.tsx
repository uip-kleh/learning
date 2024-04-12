import React, {useState, useEffect} from "react";

const UPDATE_CYCLE = 1000
const KYE_LOCAL = `KEY_LOCAL`

enum Local {
    US = `en-US`,
    JP = `ja-JP`,
}

const getLocaleFromString = (text: string) => {
    switch(text) {
        case Local.US:
            return Local.US
        case Local.JP:
            return Local.JP
        default:
            return Local.US
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocal] = useState(Local.US)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date)
        }, UPDATE_CYCLE)
        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        const savedLocale = localStorage.getItem(KYE_LOCAL)
        if(savedLocale !== null) {
            setLocal(getLocaleFromString(savedLocale))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KYE_LOCAL, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">Current time</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select value={locale} onChange={(e) => setLocal(getLocaleFromString(e.target.value))}>
                    <option value={"en-US"}>en-US</option>
                    <option value={"jp-JP"}>jp-JP</option>
                </select>
            </p>
        </div>
    )
}


