import { Button } from "@cred/neopop-web/lib/components";
const Buttons = ({ play, box, id }) => {
  return (
    <div className="buttonContainer">
    
      <Button
        id             = {id}
        variant        = "primary"
        kind           = "elevated"
        size           = "big"
        colorMode      = "dark"
        colorConfig    = {{
                            backgroundColor: "black",
                            color: "white",
                            edgeColors: { right: "white", bottom: "white" },
                         }}
        onClick       = {() => play(id)}
        fullWidth
      >
        {box[parseInt(id)]}
      </Button>
      
    </div>
  );
};

export default Buttons;
