import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
    // '[]' allows useEffect to trigger on mount (Mounting is the initial phase in which 
    // the instance of the component is created and inserted into the DOM)
    
    return { contactData, getData:handleDataFetch }
}
