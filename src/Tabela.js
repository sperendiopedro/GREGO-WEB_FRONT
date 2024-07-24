
function Tabela({vetor}){  
    return(
        
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Setor</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Permissões</th>
                    <th>Selecionar</th>
                </tr>

            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.id}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.setor}</td>
                        <td>{obj.email}</td>
                        <td>{obj.psswd}</td>
                        <td>{obj.userRole}</td>
                        <td><button className="btn btn-success">Selecionar</button> </td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
    );
}
export default Tabela; 