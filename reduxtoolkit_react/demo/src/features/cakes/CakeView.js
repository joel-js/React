import React, { useState } from 'react';
// import {Button} from 'primereact/button'
// import { InputText } from 'primereact/inputtext';
import { Button } from '@cred/neopop-web/lib/components';
import { InputField } from '@cred/neopop-web/lib/components';

import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked} from './cakeSlice'

const CakeView = () => {
  const [restockBy, setRestockBy] = useState(0);
  const numOfCakes                = useSelector( (state) => state.cake.numOfCakes )
  const dispatch                  = useDispatch()

  const order = () => {
    dispatch(ordered())
  }
  const restock = () => {
    dispatch(restocked(parseInt(restockBy)))
  }

  return (
    <div className="CakeView">
      <h2>No of Cakes: {numOfCakes}</h2>
      <Button
        variant       = "primary"
        kind          = "elevated"
        size          = "big"
        colorMode     = "dark"
        colorConfig   = {{backgroundColor: "black",color:"white",edgeColors : { right: '#F05E4B', bottom: '#F05E4B' }}}
        
        onClick={ order }
      >
        order
      </Button> 
      <br /><br />
  
      <InputField
        type        = "text"
        label       = "Restock by"
        placeholder = "enter"
        id          = "text_field"
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
 
export {CakeView};
