import { useEffect, useState } from "react";

const BoardContainer = () => {
  const [box,setBox]        = useState(Array(9).fill(''));
  const [click,setClick]    = useState(false); 

  const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

const game = (input) => {
  let rt;
  let over = false;
  let done = input.filter(i => i == '').length == 0;
  for(let i =0; i< 8;i++)
    if( (input[win[i][0]] != '')
        &&(input[win[i][0]] == input[win[i][1]])
        &&(input[win[i][1]] == input[win[i][2]]) ){
      over = true;
      break;
    }
  if(over) rt = 1 // won
  else
    if(done) rt = -1 // tie
    else rt = 0  // next player
  return rt;
}

  const play = (id) => {
    
    const newBox          = [...box];
    newBox[parseInt(id)]  = newBox[parseInt(id)] == '' ? click ? 'O' : 'X' : newBox[parseInt(id)];
    setBox(newBox)
    const result = game(newBox)
    console.log(result)
    console.log(newBox)
    
    setClick(!click)
  }

  return {box,play};
}
 
export default BoardContainer;