import { useState } from "react";
import Form from "./Form";

const FishManager = () => {

    const [fishData, setFishData] = useState({})
    const [fishArray, setFishArray] = useState([])

    return ( 
        <>
        <Form setFishData={setFishData} setFishArray={setFishArray}/>
        <Fish data={fishData} array={fishArray}/>
        </>
     );
}
 
export default FishManager;