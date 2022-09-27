import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error,setError] = useState(false)
    useEffect( () => {

            fetch(url) 
            .then( res => {
                console.log(res.status)
                if( !res.ok) throw Error(" Some Error occured")
                
                return res.json()
            })
            .then(data => {
               
                setData(data)
            })
            .catch( err => {
                setError(true)
                
            })

    },[url])
       
    return {data,setData,error}
}

export  default useFetch;