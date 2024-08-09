import { useEffect, useState } from 'react'

export function localStorageHook<T>(key: string) {
    const [value, setValue] = useState<T>(JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem(key) : null))

    useEffect(() => {
        typeof window !== "undefined" && window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as const
}
