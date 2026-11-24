import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from './CriarContaPage.module.css';
import percursoLight from '../assets/percurso-ilustrativo.svg';
import percursoDark from '../assets/percurso-ilustrativo-dark.svg';

export function CriarContaPage() {
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

          <form className={styles.formulario} id="form-cadastro" action="" novalidate>
            <div className={styles.campoPreenchimento}>
              <label for="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Marina Oliveira"
                autocomplete="name"
              />
            </div>

            <div className={styles.campoPreenchimento}>
              <label for="e-mail">E-mail</label>
              <input
                type="email"
                id="e-mail"
                name="e-mail"
                placeholder="seu@email.com"
                autocomplete="email"
              />
            </div>

            <div className={styles.campoPreenchimento}>
              <label for="senha">Senha</label>
              <div className={styles.campoPreenchimentoSenha}>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Crie uma senha"
                  autocomplete="new-password"
                  aria-describedby="requisito"
                  minlength="8"
                />
                <button
                  className={styles.botaoMostrarSenha}
                  type="button"
                  aria-label="Mostrar senha"
                >
                  <i className="fa-solid fa-eye" aria-hidden="true"></i>
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
            Já tem uma conta? <a href="index.html">Entrar</a>
          </p>
        </div>
      </main>
      <Rodape />

    </div>
  );
}