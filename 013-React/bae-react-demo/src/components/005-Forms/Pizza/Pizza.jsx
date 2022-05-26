const Pizza = ({data}) => {
    const {type, size, customerName, stuffedCrust} = data;

    // ((stuffedCrust) ? stuffedValue="Yes" : stuffedValue="No");

    return ( 
        <>
            <h1>Order Your Pizza!</h1>
            <h2>Pizza Type: {type}</h2>
            <h2>Size: {size}</h2>
            <h2>Customer name: {customerName}</h2>
            <h2>Stuffed Crust: {stuffedCrust}</h2>
        </>
     );
}
 
export default Pizza;