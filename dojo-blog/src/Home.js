import { useState } from "react"

const Home = () => {
    
    const START = 5;
    let val =START
    let num1 = START, num2 = START;
    console.log(val)
    const [num, setNum] = useState(START)

    if( num !== val){
        val = num;
        num1 = parseInt(Math.random()*1000)
        num2 = parseInt(Math.random()*1000)
    }
    const handleClick = (event) => {
        setNum(parseInt(Math.random()*1000))
		console.log("button clicked "+num+" target: ",event.target);
	}

    return (
        <div className="home">
            <h2>{num1}</h2>
            <h2>{num2}</h2>

            <button onClick={ (event) => handleClick(event) }> button </button>
        </div>
    );
}
 
export default Home;