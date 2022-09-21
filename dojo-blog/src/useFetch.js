import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(true)
    useEffect( () => {
        const abortController =new AbortController();
        setTimeout( () => {

            fetch(url,{ signal: abortController.signal })
            .then( res => {
                if( !res.ok) throw new Error(" Some Error occured")
                return res.json()
            })
            .then(data => {
                setIspending(false)
                setData(data)
            })
            .catch( err => {
                if(err.name !== 'AbortError'){
                    setIspending(false)
                    setError(err.msg)
                }
                else console.log("fetch Aborted")
            })

        },1000)
        return () => abortController.abort();
    },[url])
       
    return {data, setData, isPending, error}
}

export  default useFetch;