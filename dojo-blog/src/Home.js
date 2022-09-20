import { useState } from "react"
import List from "./List";
const Home = () => {
    const [blogs,setBlogs] = useState([
        { id: 1, title : "title-01", body : "lorem ipsum 01 ... ", author : "author - 01" },
        { id: 2, title : "title-02", body : "lorem ipsum 02 ... ", author : "author - 02" },
        { id: 3, title : "title-03", body : "lorem ipsum 03 ... ", author : "author - 03" },

    ]);


    return (
        <div className="home">
            <List list={ blogs }></List>
        </div>
    );
}
 
export default Home;