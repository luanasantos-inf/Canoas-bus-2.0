import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from  './LoginPage.module.css';
import percursoLight from '../assets/percurso-ilustrativo.png';
import percursoDark from '../assets/percurso-ilustrativo-dark.png';
import { FaEye, FaEyeSlash} from "react-icons/fa";


export function LoginPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

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
    navigate('/dadoscadastro');
  }

  return (

    <div className={styles.paginaLoginWrapper}>
      <Cabecalho variante="publico" />

      <main className={styles.mainLogin}>
        <aside className={styles.apresentacao}>
          <p className={styles.apresentacaoSlogan}>SUA CIDADE, MAIS PERTO</p>
          <p className={styles.apresentacaoTitulo}>Seu próximo destino começa aqui.</p>
          <p className={styles.apresentacaoTexto}>
            Encontre linhas e pontos de ônibus e explore Canoas com mais facilidade.
          </p>
          <img
            className={`${styles.apresentacaoImagem} imgLight`}
            src={percursoLight}
            alt="Ilustração de transporte público em Canoas"
          />
          <img
            className={`${styles.apresentacaoImagem} imgDark`}
            src={percursoDark}
            alt="Ilustração de transporte público em Canoas"
          />

        </aside>

        <div className={styles.recepcaoFormulario}>
          <h2>Bom ter você aqui</h2>
          <p className={styles.fraseApoio}>Entre para encontrar seu caminho em Canoas.</p>

          <form
            className={styles.formulario}
            id="form-login"
            onSubmit={lidarComSubmit}
            noValidate
          >
            <div className={styles.campoPreenchimento}>
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.campoPreenchimento}>
              <label htmlFor="senha">Senha</label>
              <div className={styles.campoPreenchimentoSenha}>
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
                  className={styles.botaoMostrarSenha}
                  type="button"
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  aria-pressed={mostrarSenha}
                  onClick={alternarVisibilidadeSenha}
                >
                  {mostrarSenha ? (
                    <FaEyeSlash size={18} aria-hidden="true" />
                  ) : (
                    <FaEye size={18} aria-hidden="true" />
                  )}

                </button>
              </div>
            </div>

            {mensagem && (
              <p id="mensagem" className={styles.mensagem} role="alert">
                {mensagem}
              </p>
            )}

            <button className={styles.btnEntrar} type="submit">
              Entrar
            </button>
          </form>

          <p className={styles.mudarEntrada}>
            Ainda não tem uma conta? <Link to="/criar-conta">Criar conta</Link>
          </p>
        </div>
      </main>

      <Rodape />
    </div>
  );
}