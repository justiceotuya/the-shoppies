import {useState,useEffect} from 'react'

export const useLocalStorageState = (key:string, defaultValue:any) => {
    const [value, setValue] = useState(() => {
        const localStorageValue:any = window.localStorage.getItem(key);
        if(key){
            return JSON.parse(localStorageValue)
        }
        return defaultValue
    })

    useEffect(() => {
       window.localStorage.setItem(key, value)
    }, [key, value])

    return [value, setValue]
}
