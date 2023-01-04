import { useEffect, useState } from "react";

const BoardContainer = () => {
  const [box, setBox] = useState(Array(9).fill({ val: "", color: "white" }));
  const [click, setClick] = useState(false);
  const [result, setResult] = useState([false, false, click]);
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const game = (input) => {
    let rt;
    let over = false;
    let done = input.filter((i) => i.val == "").length == 0;
    for (var i = 0; i < 8; i++) {
      if (
        input[win[i][0]].val != "" &&
        input[win[i][0]].val == input[win[i][1]].val &&
        input[win[i][1]].val == input[win[i][2]].val
      ) {
        over = true;
        break;
      }
    }
    if (over) rt = [1, i]; // won
    else if (done) rt = [-1, i]; // tie
    else rt = [0, i]; // next player
    return rt;
  };

  const play = (id) => {
    const newBox = [...box];
    if (newBox[parseInt(id)].val == "")
      if (click) newBox.splice(parseInt(id), 1, { val: "X", color: "yellow" });
      else newBox.splice(parseInt(id), 1, { val: "O", color: "orange" });
    const result = game(newBox);

    if (result[0] == 1) {
      let i = result[1];
      for (let j = 0; j < 3; j++) {
        let retain_val = newBox[win[i][j]].val;
        newBox.splice(win[i][j], 1, { val: retain_val, color: "green" });
        setResult([true, true, click]);
      }
    } else if (result[0] === -1) setResult([true, false, click]);
    setBox(newBox);

    setClick(!click);
  };

  return { box, play, result };
};

export default BoardContainer;
