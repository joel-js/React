import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(true)
    useEffect( () => {
        setTimeout( () => {

            fetch(url)
            .then( res => {
                if( !res.ok) throw new Error(" Some Error occured")
                return res.json()
            })
            .then(data => {
                setIspending(false)
                setData(data)
            })
            .catch( err => {
                setIspending(false)
                setError(err.msg)
            })

        },3000)
    },[url])
       
    return {data, setData, isPending, error}
}

export  default useFetch;