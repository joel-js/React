import { createContext } from "react";
import Router from './Router'

export const currentUser = createContext("Hola")


const CurrentUser = () => {
    let userId = "Hola"
    
    return (
        <currentUser.Provider value = {userId}> 
            <Router />
        </currentUser.Provider>
    );
}
 
export default CurrentUser;
