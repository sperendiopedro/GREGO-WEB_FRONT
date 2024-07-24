import { useEffect, useState } from 'react';
import './App.css';
import RoutesApp from './router';

function App() {
  
  //Objeto Usuaro 
  const usuario = {
      nome:'',
      setor: '', 
      email: '',
      psswd: '',
      userRole: ''
  }
 
  //UseState
  const[btnCadastrar, setBtncadastrar] = useState(true); 
  const[objUsuario, setObjUsuario] = useState(usuario)
 
  //getting the forms infos
  const aoDigitar = (e) => {
    setObjUsuario({ ...objUsuario, [e.target.name]: e.target.value });
  };

  //cadastrar usuario
  const cadastrar = () => {
   fetch ('http://localhost:8080/authenticate/saveUser', {
      method:'post',
      body:JSON.stringify(objUsuario),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json)
    .then(retorno_convertido => {
      console.log(retorno_convertido);
    });
  }

  return (
    <div className='app'>
      
      <RoutesApp/>  
        
    </div>
  );
}

export default App;
//<Forms botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
//<Tabela vetor={usuarios}/>