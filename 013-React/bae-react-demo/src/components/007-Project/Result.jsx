import {Link, useParams} from 'react-router-dom';

const Result = () => {
    const {id} = useParams();
    return ( 
        <body>
        <h2>{id}</h2>
        <Link to='/products'>Back to All Fish</Link>
        </body>
     );
}
 
export default Result;