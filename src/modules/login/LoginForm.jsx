import "./css/login.css";

export default function LoginForm(){
  return(
    <form>
      <div>
        <h1>Entrar</h1>
      </div>
      <div className="InputContainer">
        <p>Email ou número de celular</p>
        <input type="text"/>
      </div>
      <div className="InputContainer">
        <p>Senha</p>
        <input type="text"/>
      </div>
      <button type="button" className="EnterButton">Entrar</button>
      <p>OU</p>
      <button type="button" className="CodeButton">Usar um código de acesso</button>
      <a>Esqueceu a senha?</a>
      <div>
        <input type="checkbox" />
        <label>Lembre-se de mim</label>
      </div>
      <div>
        <p>Novo por aqui? <a>Assine Agora</a>.</p>
      </div>
    </form>
  )
}
