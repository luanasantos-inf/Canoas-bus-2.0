import { Cabecalho } from './Cabecalho';
import { Rodape } from './Rodape';
import { useState } from 'react';
import './App.css';

export function App() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function alternarVisibilidadeSenha() {
    setMostrarSenha((prev) => !prev);
  }

  function lidarComSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setMensagem('Preencha e-mail e senha para continuar.');
      return;
    }

    setMensagem('');
    console.log('Dados de login:', { email, senha });
  }

  return (
    <div className="app-container">
      <Cabecalho />
      <main className="main-login">
        <aside className="apresentacao">
          <p className="apresentacao-slogan">SUA CIDADE, MAIS PERTO</p>
          <p className="apresentacao-titulo">Seu próximo destino começa aqui.</p>
          <p className="apresentacao-texto">
            Encontre linhas e pontos de ônibus e explore Canoas com mais facilidade.
          </p>
          <img
            className="apresentacao-imagem"
            alt="Ilustração de transporte público em Canoas"
          />
        </aside>

        <div className="recepcao-formulario">
          <h2>Bom ter você aqui</h2>
          <p className="frase-apoio">Entre para encontrar seu caminho em Canoas.</p>

          <form
            className="formulario"
            id="form-login"
            onSubmit={lidarComSubmit}
            noValidate
          >
            <div className="campo-preenchimento">
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="email"
                id="e-mail"
                name="e-mail"
                placeholder="seu@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="campo-preenchimento">
              <label htmlFor="senha">Senha</label>
              <div className="campo-preenchimento-senha">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <button
                  className="botao-mostrar-senha"
                  type="button"
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  aria-pressed={mostrarSenha}
                  onClick={alternarVisibilidadeSenha}
                >
                  <i
                    className={`fa-solid ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`}
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>

            {mensagem && (
              <p id="mensagem" className="mensagem" role="alert">
                {mensagem}
              </p>
            )}

            <button className="btn-entrar" type="submit">
              Entrar
            </button>
          </form>

          <p className="mudar-entrada">
            Ainda não tem uma conta? <a href="/criar-conta">Criar conta</a>
          </p>
        </div>
      </main>
      <Rodape />
    </div>
  );
}

export default App;