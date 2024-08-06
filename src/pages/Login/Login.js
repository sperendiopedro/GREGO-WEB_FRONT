import "./Login.css"

function Login(){
    return(
    <form>
        <div className="login">
            <a className="btn btn-primary" 

            
            href="http://localhost:3000/oauth2/authorization/keycloak"
            style={{marginTop: '10px'}}> Login </a>
    
        </div>
    </form>
    
    )
}

export default Login; 