import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import UFDForms from "./pages/Cadastros/Ufd/UFDForms";
import UserForms from "./pages/Cadastros/User/UserForms";
import Header from "./components/Header"; 
import CadastroMenu from "./pages/Cadastros/CadastroMenu";
import UFDList from "./pages/Cadastros/Ufd/UFDList";
import UserList from "./pages/Cadastros/User/UserList";
import EmpForms from "./pages/Cadastros/Empresa/EmpForms";

function RoutesApp(){
  
    
    return(
        <BrowserRouter>
        <Header/>
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastros" element={<CadastroMenu/>}/>
            <Route path="/user/register" element={<UserForms/>}/>    
            <Route path="/user/list" element={<UserList/>}/> 
            <Route path="//ufd/register" element={<UFDForms/>}/>
            <Route path="/ufd/list" element={<UFDList/>}/>
            <Route path="/empresa/register" element={<EmpForms/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;