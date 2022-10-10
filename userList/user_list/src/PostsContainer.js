import { useState } from "react";
import { getPosts } from "./Services";
import { useEffect } from "react";


const PostsContainer = () => {
     
    const [rows,setRows] = useState();
    useEffect( () => {
        
        getPosts().then(data => setRows(data))
    },[])
    
    const deleteItem = event => {
        event.preventDefault();
        const id = event.target.getAttribute("postid");
        const newRows = rows.filter( row => (row.id+"") !== id )

        setRows( newRows )
    }
    return {rows,deleteItem};
}
export default PostsContainer;