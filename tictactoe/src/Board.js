import BoardContainer from "./BoardContainer";
import { Button } from "@cred/neopop-web/lib/components";
import Buttons from "./Buttons";

const Board = () => {

  const { box, play } = BoardContainer();

  return (
    <div className="buttonContainer">
    <div className="Board">
      <Button
        id             = "0"
        variant        = "primary"
        kind           = "elevated"
        size           = "big"
        colorMode      = "dark"
        colorConfig    = {{
                            backgroundColor: "black",
                            color: "white",
                            edgeColors: { right: "white", bottom: "white" },
                         }}
        onClick       = {() => play(0)}
        fullWidth
      >
        {box[parseInt('0')]}
      </Button>
      </div>
    </div>
  );
};

export default Board;
