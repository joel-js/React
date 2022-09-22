import { useEffect, useState } from "react";

const Card = () => {
    const [state,setState] =useState("");
    let cont= "I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.";
    const [content,setContent] = useState("Hoola")
    useEffect( () => {
        setState("Maari");
        
    },[content])
    return (
        <div className="card white darken-1">
            <div className="card-content black-text">
                <span className="card-title">Card Title</span>
                <p>{content}</p>
            </div>
            <div className="card-action">
                <button className="waves-effect waves-light btn" onClick ={ () => setContent("nice")}>Button</button>
            </div>
        </div>
    );
}
 
export default Card;