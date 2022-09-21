import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] =useState("");
    const [body,setContent] =useState("");
    const [author,setAuthor] =useState("mario");
    const [isPending, setIsPending] =useState(false)
    const history =useHistory();
    const handleSubmit= (event) => {
        
        event.preventDefault();
        setIsPending(true)
        const blog = {title,body,author}
        console.log(blog);

        setTimeout( () =>{
            fetch('http://localhost:8000/blogs',{
                method  : 'POST',
                headers : {
                    "Content-Type": "application/json"
                },
                body    : JSON.stringify(blog)
            })
            .then( res => {
                console.log(res)
                setIsPending(false)
                history.push('/')
            })
        },3000 )
        
    
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text" 
                    required
                    onBlur={ (event) => setTitle(event.target.value)}
                />
                <label>Content</label>
                <textarea
                    required
                    onBlur={ (event) => setContent(event.target.value)}

                >
                </textarea>
                <label>Author</label>
                <select
                    value ={author}
                    onChange={ (event) => setAuthor(event.target.value)}

                >
                    <option value="yoshi">yoshi</option>
                    <option value="mario">mario</option>
                </select>
                {  !isPending && <button >Add Blog</button>}
                {  isPending && <button disabled >Adding</button>}
                
            </form>
        </div>
    );
}
 
export default Create;