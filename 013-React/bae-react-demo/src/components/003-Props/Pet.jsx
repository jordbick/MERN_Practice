import PetImage from "./PetImage"

// Will display the name, image and cost
const Pet = ({name, phoneNumber, address, cute}) => {
    // Now have variables name, image and cost to play with
    // Destructured from the props data

    let cuteValue;

    if (cute ? cuteValue="Hella Cute" : cuteValue="Meh")

    return ( 
       
        <>
        <h1>DOGGO!</h1>
            <h4> Pet name: {name}</h4>
            <h4>Phone Number: {phoneNumber}</h4>
            <h4>Address: {address}</h4>
            <img src="https://www.themoderndogtrainer.net/wp-content/uploads/2015/01/puppy-class.jpg" name={name}/>
            <h4>{cuteValue}</h4>
            <hr/>
        </>
     );
}
 
export default Pet;