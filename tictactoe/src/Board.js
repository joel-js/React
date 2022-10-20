import BoardContainer from "./BoardContainer";
import Buttons from "./Buttons";
import Confirm from "./Confirm";

const Board = () => {

  const { box, play,result } = BoardContainer();
  
  return (
    <div className="Board">
      <h2> Tic Tac Toe</h2>
      <br /><br />
      <table>
        <tbody>
          <tr>
            <td><Buttons play = {play} box ={box} id = '0' /></td>
            <td><Buttons play = {play} box ={box} id = '1' /></td>
            <td><Buttons play = {play} box ={box} id = '2' /></td>
          </tr>
          <tr>
            <td><Buttons play = {play} box ={box} id = '3' /></td>
            <td><Buttons play = {play} box ={box} id = '4' /></td>
            <td><Buttons play = {play} box ={box} id = '5' /></td>
            
            
          </tr>
          <tr>
            <td><Buttons play = {play} box ={box} id = '6' /></td>
            <td><Buttons play = {play} box ={box} id = '7' /></td>
            <td><Buttons play = {play} box ={box} id = '8' /></td>
          </tr>
        </tbody>
      </table>
      {result[0] && result[1] && <h2>Game Won</h2> }
      {result[0] && !result[1] && <h2>Game Tied</h2> }
    </div>
  );
};

export default Board;
