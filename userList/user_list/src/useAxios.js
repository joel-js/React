import { useEffect, useState } from "react";
import Axios from 'axios';

const useAxios = (url) => {

    const [data,setData] = useState();

    useEffect( () => {
        Axios.get(url)
        .then( res => {
            console.log(res.status)
            return res.data
        } )
        .then( data => setData(data) )
        .catch(err => console.log(err))
    } ,[url])

   return {data, setData}
}
 
export default useAxios;