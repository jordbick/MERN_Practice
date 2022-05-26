// Our counter is merely a function that can take in parameters
// Parameters are simply props

// Our component takes in some 'props'
// Props is all of the data transferred to it
const Counter = (props) => {
    // making a new variable called score = the score attribute of props
    const score = props.score;
    return ( 
        <h2> The current score is {score}</h2>
     );
}
 
export default Counter;