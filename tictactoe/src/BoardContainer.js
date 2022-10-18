import { useEffect, useState } from "react";

const BoardContainer = () => {
  const [box,setBox]        = useState(Array(9).fill(''));
  const [click,setClick]    = useState(false); 
  const [id, setId]         = useState();
  useEffect( () => {
    
    const newBox = box;
    newBox[0]    = click ? 'O' : 'X';
    setBox(newBox) 
  } ,[click])
  
  const play = (id) => {
    console.log("Id  :::",id);
    setId(id)
    setClick(!click)
  }

  return {box,play};
}
 
export default BoardContainer;