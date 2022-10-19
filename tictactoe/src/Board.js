import BoardContainer from "./BoardContainer";
import { Button } from "@cred/neopop-web/lib/components";
import Buttons from "./Buttons";

const Board = () => {

  const { box, play } = BoardContainer();

  return (
    <div className="Board">
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
      
    </div>
  );
};

export default Board;
