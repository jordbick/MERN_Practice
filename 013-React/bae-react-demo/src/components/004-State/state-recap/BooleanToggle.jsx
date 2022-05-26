// Takes in as a prop one of two things:
// - Pass in the setBool() useState query and make our own function here
// - Pass in the booleanToggle() we created in our manager
const BooleanToggle = (props) => {
    return ( 
        <button type="button" onClick={props.toggleBoolean}>Click me to toggle</button>
     );
}
 
export default BooleanToggle;