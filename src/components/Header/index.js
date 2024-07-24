import './header.css'; 
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/home"> Grego </Link>
            <Link className="cadastros" to="/cadastros"> Cadastros </Link>
            <h1> </h1>

        </header>
    )
}

export default Header; 