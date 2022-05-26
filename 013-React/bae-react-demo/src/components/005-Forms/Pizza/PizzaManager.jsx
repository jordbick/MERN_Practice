import { useState } from "react";
import Pizza from "./Pizza";
import PizzaArrayForm from "./PizzaArrayForm";

const PizzaManager = () => {

    const[pizzaData, setPizzaData] = useState({});

    const[pizzaArray, setPizzaArray] = useState([]);

    return ( 
        <>
            <PizzaArrayForm setPizzaData={setPizzaData} setPizzaArray={setPizzaArray}  data={pizzaData} pizzaArray={pizzaArray}/>
            <Pizza data={pizzaData} pizzaArray={pizzaArray}/>
            {/* Array.map is used to loop through the array and returns an object */}
            {pizzaArray.map((pizza) => {
                    // Important you remember to return this component!
                    return <Pizza data={pizza}/>})
                    
}
        </>
     );
}

 
export default PizzaManager;
