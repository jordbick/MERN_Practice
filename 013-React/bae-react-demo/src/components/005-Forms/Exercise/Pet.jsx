const Pet = ({data}) => {
    console.log(data);
    const{name, number, address, image, cute} = data;
    // Now have variables name, image and cost to play with
    // Destructured from the props data


    return ( 
       
        <>
        <h1>DOGGO!</h1>
            <h4> Pet name: {name}</h4>
            <h4>Phone Number: {number}</h4>
            <h4>Address: {address}</h4>
            {/* <img src={image} name={name} width="500" height="300"/> */}
            <h4>Cute: {cute}</h4>
            <hr/>
        </>
     );
}
 
export default Pet;