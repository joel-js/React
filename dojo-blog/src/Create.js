import { useState } from "react";

const Create = () => {
    const [title,setTitle] =useState("");
    const [content,setContent] =useState("");
    const [author,setAuthor] =useState("mario");

    const handleSubmit= (event) => {
        event.preventDefault();
        const blog = {title,content,author}
        console.log(blog);
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
                <input type="submit" value="Add Blog" className="submit"
                />
            </form>
            <p>{title}</p>
            <p>{content}</p>
            <p>{author}</p>

        </div>
    );
}
 
export default Create;