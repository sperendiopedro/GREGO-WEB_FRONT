function UserForms({botao, eventoTeclado, cadastrar}){
    return (
        <form>
              <h1> Registro de usuario: </h1>
            <input type="text" onChange={eventoTeclado} name='nome' placeholder="Nome" className="form-control"/> 
            <input type="text" onChange={eventoTeclado} name='setor' placeholder="Setor"className="form-control"/> 
            <input type="email" onChange={eventoTeclado} name='email' placeholder="Email"className="form-control"/>
            <input type="password" onChange={eventoTeclado} name='psswd' placeholder="Senha"className="form-control"/>
            <input type="text" onChange={eventoTeclado} name='userRole' placeholder="Permissões"className="form-control"/>
            {
                botao
                ?
                <input type="button" value='Inserir' onClick={cadastrar} className="btn btn-primary"/> 
                :
                <div>

                 <input type="button" value='Inserir'className="btn btn-primary" /> 
                <input type="button" value='Cancelar'className="btn btn-secondary"/> 
            

                </div>
                
            }


            

            
        </form>
    )
}
export default UserForms; 
