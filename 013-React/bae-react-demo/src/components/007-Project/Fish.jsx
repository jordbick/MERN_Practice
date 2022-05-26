const Fish = ({data}) => {
    const {name, colour, age, diet} = data;
    return ( 
        <>
            <h3>Name: {name} </h3>
            <h3>Colour: {colour}</h3>
            <h3>Age: {age}</h3>
            <h3>Diet: {diet} </h3>
        </>
    );
}
 
export default Fish;