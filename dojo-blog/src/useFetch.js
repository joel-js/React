import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(false)
    useEffect( () => {
        //const abortController =new AbortController();
        setTimeout( () => {

            fetch(url) // { signal: abortController.signal }
            .then( res => {
                console.log(res.status)
                if( !res.ok) throw Error(" Some Error occured")
                
                return res.json()
            })
            .then(data => {
                setIspending(false)
                setData(data)
            })
            .catch( err => {
                if(err.message === "Failed to fetch"){
                    
                    setIspending(false)
                    setError("Error: Server down !!!")
                }
                else{
                    setIspending(false)
                    setError(err.message)
                }
                // if(err.name !== 'AbortError'){
                //     setIspending(false)
                //     setError(err.msg)
                // }
                // else {
                //     console.log("Error" + err.msg)
                //     setError(err.msg)
                // }
            })

        },1000)
        //return () => abortController.abort();
    },[url])
       
    return {data, setData, isPending, error}
}

export  default useFetch;