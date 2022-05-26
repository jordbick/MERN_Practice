import { useState } from "react";
import Pet from "./Pet";

const Form = () => {

    // Make our state into an object
    // Objects within JS are collections of ANY data
    const petObj = {
        name: "Sausage",
        number: "078787878787",
        address:"Under Stairs",
        image: "some-image.png",
        cute: true
    }

    // {}       - Empty object
    // petObj   - existing/default object
    // null     - null field
    const [petData, setPetData] = useState({});

    // Need a function that lets us update one attribute of the object and keep the other options
    // Function takes in an event
    const setData = (event) => {
        // pull the name and value out of our event.target
        const {id, value} = event.target;
        setPetData((prevValue) => ({ // Taking the current calue of setPetData and allowing JS to modify it
            ...prevValue, // spread operator, ignore all of the previous attributes
            [id] : value // set the key to be the input field name (name, number address) : value
                            // number: "30484562" - either going to put it ar the end OR update the original number
        }))
    }



    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")

  



    return ( 
        <>
            {/* <Pet  name="Cheese" phoneNumber="0113 PATDOG" address="My Living room" image="https://www.themoderndogtrainer.net/wp-content/uploads/2015/01/puppy-class.jpg" cute={true}/>
            <Pet name="Mash" phoneNumber="Ate phone" address="Under the desk" image ="https://www.hdwallpapers.in/download/puppy_eyes_beagle-1280x800.jpg" cute ={false}/> */}


            <input type="text" id="name" name ="name" onChange={(event) => {setData(event)}}/>
            <input type="text" id="number" name="number" onChange={(event) => {setData(event)}}/>
            <input type="text" id="address" name="address" onChange={(event) => {setData(event)}}/>
            <input type="text" id="image" name="image" onChange={(event) => {setData(event)}}/>
            <input type="text" id="cute" name="cute" onChange={(event) => {setData(event)}}/>
            {/* <Pet name={name} number={number} address={address} image={image} cute={true}/> */}
            <Pet data={petData}/>
        </>
     );
}
 
export default Form;
