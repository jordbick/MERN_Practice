import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
        <header>
        <nav class="navbar">
            <ul class="nav-ul">
            <li><Link to="/"><a>Home</a></Link></li>
            <li><Link to="/about"><a>About Us</a></Link></li>
            <li><Link to="/results"><a>View Fish</a></Link></li>
            <li><Link to="/form"><a>Add Fish</a></Link></li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Nav;