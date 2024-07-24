import './header.css'; 
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/home"> Grego </Link>
            <Link className="cadastros" to="/"> Orçamentos </Link>
            <Link className="cadastros" to="/"> Nota Fiscal </Link>
            <Link className="cadastros" to="/"> Boletos </Link>
            <Link className="cadastros" to="/"> Mercadoria </Link>
            <Link className="cadastros" to="/"> Moeda </Link>
            <Link className="cadastros" to="/cadastros"> Cadastros gerais </Link>
            <h1> </h1>

        </header>
    )
}

export default Header; 