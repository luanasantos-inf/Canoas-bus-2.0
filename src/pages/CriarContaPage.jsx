import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from './CriarContaPage.module.css';
import percursoLight from '../assets/percurso-ilustrativo.png';
import percursoDark from '../assets/percurso-ilustrativo-dark.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function CriarContaPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (

    <div className={styles.paginaCriarContaWrapper}>
      <Cabecalho variante="publico" />
      <main className={styles.mainCriarConta}>
        <aside className={styles.apresentacao}>
          <p className={styles.apresentacaoSlogan}>SUA CIDADE, MAIS PERTO</p>
          <p className={styles.apresentacaoTitulo}>Seu próximo destino começa aqui.</p>
          <p className={styles.apresentacaoTexto}>
            Encontre linhas e pontos de ônibus e explore Canoas com mais
            facilidade.
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
          <h2>Crie sua conta</h2>
          <p className={styles.fraseApoio}>Sua próxima viagem começa com um cadastro.</p>

          <form className={styles.formulario} id="form-cadastro" action="" noValidate>
            <div className={styles.campoPreenchimento}>
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Marina Oliveira"
                autoComplete="name"
              />
            </div>

            <div className={styles.campoPreenchimento}>
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="email"
                id="e-mail"
                name="e-mail"
                placeholder="seu@email.com"
                autoComplete="email"
              />
            </div>

            <div className={styles.campoPreenchimento}>
              <label htmlFor="senha">Senha</label>
              <div className={styles.campoPreenchimentoSenha}>
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  placeholder="Crie uma senha"
                  autoComplete="new-password"
                  aria-describedby="requisito"
                  minLength={8}
                />
                <button
                  className={styles.botaoMostrarSenha}
                  type="button"
                  aria-label="Mostrar senha"
                  onClick={() => setMostrarSenha((estadoAtual) => !estadoAtual)}
                >
                  {mostrarSenha ? (
                    <FaEyeSlash size={18} aria-hidden="true" />
                  ) : (
                    <FaEye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
              <p id="requisito" className={styles.camporequisito}>mínimo 8 caracteres</p>
            </div>

            <p id="mensagem" className={styles.mensagem} role="alert"></p>

              <button className={styles.btnCadastrar} type="submit">
                Criar conta
              </button>
            </form>

            <p className={styles.mudarEntrada}>
              Já tem uma conta? <Link to="/">Entrar</Link>
            </p>
          </div>
      </main>
      <Rodape />

    </div>
  );
}