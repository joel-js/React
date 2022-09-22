import { useEffect, useState } from 'react';
import Button from './Button';
import Card from './Card'

const Home = () => {

    let [count, setCount] = useState(0);
    let [display,setDisplay] =useState(count)

    let addCount = () =>{
        setCount(count+=1)
    }
    
    useEffect( () => setDisplay(Array(count).fill('*').map( () => <Card />)) ,[count])
    return (
        
        <div className="home">

            <div className="row">
                <div className="col s1">
                    <Button addCount={addCount} count ={count} setCount={setCount}/>
                </div>
            </div>

            <div className="row">
                <br />
                {display}
            </div> 

        </div>
    );
}
 
export default Home;