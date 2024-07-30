import './header.css'; 
import { Link } from 'react-router-dom';
function Header(){

    return(
        <header>
            <Link className="logo" to="/"> Grego </Link>
            <Link className="cadastros" to="/"> Orçamentos </Link>
            <Link className="cadastros" to="/"> Nota Fiscal </Link>
            <Link className="cadastros" to="/"> Boletos </Link>
            <Link className="cadastros" to="/"> Mercadoria </Link>
            <Link className="cadastros" to="/"> Moeda </Link>
            <div className="dropdown">
            <div className="dropdown-toggle">Cadastros gerais</div>
            <div className="dropdown-menu">
                <Link className="dropdown-item" to="/user/register">Registro de usuário</Link>
                <Link className="dropdown-item" to="/ufd/register">Registro de UF</Link>
                <Link className="dropdown-item" to="/empresa/register">Registro de empresa</Link>
                <Link className="dropdown-item" to="/fornec/register">Registro de fornecedor</Link>
            </div>
        </div>
            

        </header>
    )
}

export default Header; 