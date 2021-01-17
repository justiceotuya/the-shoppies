import {useState,useEffect} from 'react'

export const useLocalStorageState = (  key:string,defaultValue:any) => {
    const [value, setValue] = useState(() => {
        const localStorageValue:any = window.localStorage.getItem(key);
        return key !== null
        ? JSON.parse(localStorageValue)
        : defaultValue;
    })

    useEffect(() => {
       window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
