import { useState } from "react";
import DisplayForm from "./DisplayForm";
import Form from "./Form";

const ManagerForm = () => {

    const[text, setText] = useState("test");

    return ( 
        <>
            <Form setText={setText}/>
            <DisplayForm text={text}/>
        </>
     );
}
 
export default ManagerForm;