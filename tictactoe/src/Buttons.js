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
          edgeColors: { right: box[parseInt(id)].color, bottom: box[parseInt(id)].color },
        }}
        onClick       = {() => play(id)}
        fullWidth
        
        
      >
        {box[parseInt(id)].val}
      </Button>
      
    </div>
  );
};

export default Buttons;
