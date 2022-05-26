import {useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const StateManager = () => {
    // Our manager will create and store our state
    // State is our data that is tracked and can change

    // To create state, declare a const[dataToTrack, setSameData]
    // When the app starts, number is equal to zero
    const[number, setNumber] = useState(0);

    return ( 
        <>
            {/* Pass the setNumber() to counter so it can change the state */}
            <Counter changeValue={setNumber}/>

            {/* Pass the number variable to our displayy so it can use the state */}
            <Display number={number}/>
        </>
     );
}
 
export default StateManager;