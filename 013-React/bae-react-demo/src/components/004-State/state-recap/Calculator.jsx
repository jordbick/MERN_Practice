const Calculator = ({setCalValue}) => {

    const addOne = () => {
        // Take the current value of our state, and increase by one
        setCalValue((currentValue) => {
             return currentValue +1;
        });
    };

    const minusOne = () => {
        setCalValue((currentValue) => {
            return currentValue -1;
        });
    };

    const multiply = () => {
        setCalValue((currentValue) => {
            return currentValue *2;
        });
    };

    const divide = () => {
        setCalValue((currentValue) => {
            return currentValue /2;
        });
    };

    const random = () => {
        setCalValue((currentValue) => {
            return currentValue + (Math.floor(Math.random()*11))
        })
    }

    return ( 
        <>
            <button type="button" onClick={addOne}>Click me to add one!</button>
            <button type="button" onClick={minusOne}>Click me to minus one!</button>
            <button type="button" onClick={multiply}>Click me to multiply by 2!</button>
            <button type="button" onClick={divide}>Click me to divide by 2!</button>
            <button type="button" onClick={random}>Click me to add a random number!</button>
        </>
     );
};
 
export default Calculator;