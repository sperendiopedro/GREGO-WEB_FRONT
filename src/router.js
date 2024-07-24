import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import UFDForms from "./pages/Cadastros/UFDForms";
import UserForms from "./pages/Cadastros/UserForms";
import Tabela from "./Tabela";
import Header from "./components/Header"; 
import CadastroMenu from "./pages/Cadastros/CadastroMenu";

function RoutesApp(){
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/authenticate/list")
        .then(response => response.json())
        .then(data => setUsuarios(data));
    },[])
    
    
    return(
        <BrowserRouter>
        <Header/>
        <Routes> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/cadastros" element={<CadastroMenu/>}/>
            <Route path="/cadastros/ufd" element={<UFDForms/>}/>
            <Route path="/authenticate/register" element={<UserForms/>}/>    
            <Route path="/authenticate/list" element={<Tabela vetor={usuarios}/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;