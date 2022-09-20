import { useEffect, useState } from "react"
import List from "./List";
import useFetch from "./useFetch";


const Home = () => {
    
    const { data: blogs, setData: setBlogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
    const deleteBlog = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id);
        setBlogs(newBlogs)
    };

    return (
        <div className="home">
            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }
            { blogs && <List list={ blogs } mainTitle ="Blogs" deleteItem ={ deleteBlog }></List>}
            { blogs && <List list={ blogs.filter( (blog) => blog.author === 'mario' ) } mainTitle = "Featured"></List>}
        </div>
    );
}
 
export default Home;