import { time } from "console"
import React, {useState, useEffect} from "react"

const UPDATE_CYCLE: number = 1000
const KEY_LOCALE: string = `KEY_LOCALE`

enum Locale {
    US = `en-US`,
    JP = `jp-JP`
}

const getLocaleFromString = (text: string) => {
    switch(text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

export const UseEffectSample = () => {
    const [timestamp, setTimeStamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeStamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if(savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    }, [locale])

    return (
        <div>
            <h2>UseEffectSample</h2>
            <p>
                <span id="current-time-label">current time</span>
                <span>{timestamp.toLocaleString(locale)}</span>
                <select 
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                        <option value="en-US">en-US</option>
                        <option value="jp-JP">jp-JP</option>
                    </select>
            </p>
        </div>
    )
}