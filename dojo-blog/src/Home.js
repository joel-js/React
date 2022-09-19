import { useState } from "react"

const Home = () => {
    
    
    const [num, setNum] = useState(5)
    const handleClick = (event) => {
        setNum(parseInt(Math.random()*1000))
		console.log("button clicked "+num+" target: ",event.target);
	}

    return (
        <div className="home">
            <h2>{num}</h2>
            <button onClick={ (event) => handleClick(event) }> button </button>
        </div>
    );
}
 
export default Home;