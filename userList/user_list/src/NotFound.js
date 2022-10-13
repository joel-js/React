import {Link} from 'react-router-dom'
import {getUsers,getPostsPreview, postUsers, postPosts} from './Services'
import { useEffect, useState } from 'react'
const NotFound = () => {
    
    const [rows,setRows] = useState();
    // useEffect( () => {
        
    //     getPostsPreview().then(data => setRows(data))
    // },[])
    // console.log(rows)
    useEffect(() => setRows(5),[])
    console.log(rows)
    return (
        <div className="Notfound">
            
            <h2>Something went wrong</h2>
            <Link to='/'>go to home</Link>

            
        </div>
    );
}
 
export default NotFound;