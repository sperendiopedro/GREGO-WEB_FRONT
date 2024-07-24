import { useState } from "react";

function UserForms({ botao }) {
    // Object user
    const [objUser, setObjUser] = useState({
        nome: '', 
        setor: '',
        email: '',
        psswd: '',
        userRole: ''
    });

    const aoDigitar = (e) => {
        const { name, value } = e.target;
        setObjUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const cadastrar = () => {
        fetch("http://localhost:8080/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        })
        .then(response => {
            if (response.ok) {
                alert("Usuário salvo com sucesso!");
                // Reset form
                setObjUser({
                    nome: '', 
                    setor: '',
                    email: '',
                    psswd: '',
                    userRole: ''
                });
            } else {
                alert("Erro ao salvar o usuário.");
            }
        })
        .catch(error => {
            console.error("Erro ao salvar o usuário:", error);
            alert("Erro ao salvar o usuário.");
        });
    };

    return (    
       <form>
            <h1>Registro de usuário:</h1>
            <input 
                type="text" 
                onChange={aoDigitar} 
                name='nome' 
                value={objUser.nome}
                placeholder="Nome" 
                className="form-control"
            /> 
            <input 
                type="text" 
                onChange={aoDigitar} 
                name='setor' 
                value={objUser.setor}
                placeholder="Setor" 
                className="form-control"
            /> 
            <input 
                type="email" 
                onChange={aoDigitar} 
                name='email' 
                value={objUser.email}
                placeholder="Email" 
                className="form-control"
            />
            <input 
                type="password" 
                onChange={aoDigitar} 
                name='psswd' 
                value={objUser.psswd}
                placeholder="Senha" 
                className="form-control"
            />
            <input 
                type="text" 
                onChange={aoDigitar} 
                name='userRole' 
                value={objUser.userRole}
                placeholder="Permissões" 
                className="form-control"
            />
            {
                botao
                ? (
                    <input 
                        type="button" 
                        value="Inserir" 
                        onClick={cadastrar} 
                        className="btn btn-primary" 
                    /> 
                ) : (
                    <div>
                        <input 
                            type="button" 
                            value="Inserir" 
                            className="btn btn-primary" 
                            onClick={cadastrar}
                        /> 
                        <input 
                            type="button" 
                            value="Cancelar" 
                            className="btn btn-secondary"
                        />
                    </div>
                )
            }
        </form>
    )
}

export default UserForms;