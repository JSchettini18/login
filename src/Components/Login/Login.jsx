import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); // Modo de login ou cadastro
  const [errorMessage, setErrorMessage] = useState(""); // Mensagem de erro

  // Função para registrar um novo usuário
  const handleRegister = (event) => {
    event.preventDefault();

    // Simples validação de entrada
    if (username === "" || password === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    // Armazena as credenciais no localStorage (simulando um banco de dados)
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setErrorMessage("");
    alert("Usuário registrado com sucesso!");
    setIsLoginMode(true); // Volta ao modo de login após cadastro
  };

  // Função para verificar as credenciais de login
  const handleLogin = (event) => {
    event.preventDefault();

    // Obtém os dados do localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Verifica se o usuário está cadastrado e se as credenciais batem
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setErrorMessage("");
      alert("Login bem-sucedido!");
    } else {
      setErrorMessage("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={isLoginMode ? handleLogin : handleRegister}>
        <h1>{isLoginMode ? "Acesse o sistema" : "Cadastre-se"}</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Exibe erros */}
        
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          {isLoginMode && (
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
          )}
          {isLoginMode && <a href="#">Esqueceu sua senha?</a>}
        </div>
        <button type="submit">{isLoginMode ? "Login" : "Cadastrar"}</button>

        <div className="signup-link">
          <p>
            {isLoginMode
              ? "Não tem uma conta? "
              : "Já tem uma conta? "}
            <a href="#" onClick={() => setIsLoginMode(!isLoginMode)}>
              {isLoginMode ? "Registar" : "Login"}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
