import { useEffect, useState } from "react"
import axiosReq from "./apiReq"

function useAxiosReq({ url, body, method , defaultData}){
    const [data, setData] = useState(defaultData)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData  = async()=>{
        setLoading(true)
        try {
            const res = await axiosReq({url, method, data:body})
            setData(res)
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{fetchData()}, [])

    return {data, error, loading}

}
export default useAxiosReq