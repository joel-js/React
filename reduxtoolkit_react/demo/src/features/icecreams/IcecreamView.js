import React, {useState} from 'react';
// import {Button} from 'primereact/button'
// import { InputText } from 'primereact/inputtext';
import { Button } from '@cred/neopop-web/lib/components';
import { InputField } from '@cred/neopop-web/lib/components';

import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked} from './icecreamSlice'

const IcecreamView = () => {
  const [restockBy, setRestockBy] = useState(0);
  const numOfIcecreams            = useSelector( (state) => state.icecream.numOfIcecreams )
  const dispatch                  = useDispatch()

  const order = () => {
    dispatch(ordered(1))
  }
  const restock = () => {
    dispatch(restocked(parseInt(restockBy)))
  }

  return (
    <div className="IcecreamView">
      <h2>No of Icecreams: {numOfIcecreams}</h2>
      <Button
        variant     = "primary"
        kind        = "elevated"
        size        = "big"
        colorMode   = "dark"
        colorConfig = {{backgroundColor: "black",color:"white",edgeColors : { right: '#F05E4B', bottom: '#F05E4B' }}}
        
        onClick={ order }
      >
        Order
      </Button> 
      <br /> <br />
      <InputField
        type        ="text"
        label       ="Restock by"
        placeholder ="0"
        id          ="text_field"
        autoFocus
        onBlur      ={ (e) => setRestockBy(e.target.value)}
      />

      <Button
        variant     = "primary"
        kind        = "elevated"
        size        = "big"
        colorMode   = "dark"
        colorConfig = {{backgroundColor: "black",color:"white",edgeColors : { right: '#4FE3A3', bottom: '#4FE3A3' }}}
        onClick     = { restock }
      >
        Restock
      </Button> 
    </div>  
  );
}
 
export {IcecreamView};
