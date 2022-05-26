// Take in setNumber which is a number
let value=0;

const Counter = ({changeValue}) => {
    return ( 

        <>
            <button type="button" onClick={() => {
                changeValue(value++)}}>Button</button>
        </>

     );}


 
export default Counter;