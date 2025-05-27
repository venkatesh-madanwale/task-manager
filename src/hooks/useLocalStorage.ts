import { useState, useEffect } from "react";

// This is a custom hook, can work with any types like string, boolean, number, etc.
// key: localStorage key to read or write
// initial value: fallback value if the localStorage is no value or mal-found

export function useLocalStorage<T>(key: string, initialValue: T) {
    // Uses lazy initialization with a function to avoid running the logic on every re-render
    // It prevents errors during server side rendering

    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        // Tries to read the value based on key "the key is always string", the item can be of any type
        // If item is found it will be Parsed and send
        // Else the initial value will be send.
        try {
            const item = window.localStorage.getItem(key)
            return item ? (JSON.parse(item) as T) : initialValue
        } catch (error) {
            console.warn(`error reading localStorage ${key}`, error)
            return initialValue
        }
    })
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.warn(`Error setting the localStorage for ${key}`, error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue] as const
}