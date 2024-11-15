
import { useState } from "react";
import Context from "./Context";

const State =({children})=>{
const [isLoggedIn , setlogin] = useState(true);
return (
    <Context.Provider value={{isLoggedIn ,setlogin }}>
        {children}
    </Context.Provider>
)
}
export default State;

