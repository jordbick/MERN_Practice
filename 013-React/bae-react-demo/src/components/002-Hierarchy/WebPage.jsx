// Using Simple React Snippets type in sfc (Stateless Functional Component)

import Article from "./Article";
import Footer from "./Footer";
import Title from "./Title";

// This will render navbar
const WebPage = () => {
    return ( 
        <>
            <Title/>
            <Article/>
            <Article/>
            <Footer/>
        </>
     );
}
 
export default WebPage;