const Form = ({setText}) => {
    console.log(setText)
    return ( 
        <input type="text" onChange={(event) => setText(event.target.value)}/>
     );
}
 
export default Form;