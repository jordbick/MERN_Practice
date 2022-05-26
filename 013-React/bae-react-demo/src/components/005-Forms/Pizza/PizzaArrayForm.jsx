const PizzaArrayForm = ({setPizzaData, setPizzaArray, data, pizzaArray}) => {

    const setData = (event) => {
        // pull the name and value out of our event.target
        const {name, value} = event.target;
        setPizzaData((prevValue) => ({ 
            ...prevValue,
            [name] : value
        }));
    };

    const addToArray = () => {
        setPizzaArray((prevArray) => {
            return[...prevArray, data] // same as array.push, ignore all data and put this at the end
        });

        setPizzaData({}) // Set Pizza Object state to empty
    }

    return ( 
        <>
            <label name="type">Type: </label>
            <input type="text" name="type" onChange={(event) => {setData(event)}}/>
            <label name="size">Size: </label>
            <input type="number" name="size" onChange={(event) => {setData(event)}}/>
            <label name="customerName">Customer: </label>
            <input type="text" name="customerName" onChange={(event) => {setData(event)}}/>
            <label name="stuffedCrust">Stuffed Crust: </label>
            <input type="radio" name="stuffedCrust" value={true} onChange={(event) => {setData(event)}}/>
            <label name="yes">Yes</label>
            <input type="radio" name="stuffedCrust" value={false} onChange={(event) => {setData(event)}}/>
            <label name="no">No</label>

            <button type="button" onClick={addToArray}> Click to add Order!</button>
            {/* <button type="button" onClick={()=> console.log(pizzaArray)}>Click to print</button> */}

            

        </>


     );
}
 
export default PizzaArrayForm;