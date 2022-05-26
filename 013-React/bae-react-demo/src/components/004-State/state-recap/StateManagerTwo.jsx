// StateMangerTwo is the parent component
// It will contain bool and setBool
// It will render DisplayTwo(bool) and BooleanToggle(setBool)

import { useState } from "react";
import BooleanToggle from "./BooleanToggle";
import Calculator from "./Calculator";
import DisplayTwo from "./DisplayTwo";

const StateManagerTwo = () => {

    //Create my state - const [nameOfState, setNameOfState]
    // Default value of my state is true, starting value is boolean 'true'
    const [bool, setBool] = useState(true);

    const [calValue, setCalValue] = useState(0);


    const toggleBoolean = () => {
        (bool ? setBool(false) : setBool(true))
    }

    return ( 
        <>
        {/* <h2> The value of bool is {bool.toString()}</h2> */}
        <DisplayTwo bool={bool} calValue={calValue} />
        <BooleanToggle toggleBoolean={toggleBoolean}/>
        <Calculator setCalValue={setCalValue}/>
        </>
     );
}
 
export default StateManagerTwo;