import { useState, useCallback } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback( async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true)
        try{
            if (body){
                body = JSON.stringify(body)
                headers["Content-Type"] = "application/json"
            }

            const res = await fetch(url, {method, body, headers})

            const data = await res.json()


            if(!res.ok){
                console.log(data.message || "Что-то не так с запросом на сервер")
            }

            setLoading(false)
            return data
        }catch(e) {
            setLoading(false)
            setError(e.message)
            console.log(e)
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}