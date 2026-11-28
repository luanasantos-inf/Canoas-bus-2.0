import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './CriarContaPage.module.css';
import percursoLight from '../../assets/percurso-ilustrativo.png';
import percursoDark from '../../assets/percurso-ilustrativo-dark.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function CriarContaPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  function alternarVisibilidadeSenha() {
    setMostrarSenha((prev) => !prev);
  }

  function lidarComSubmit(event) {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim();
    const senhaLimpa = senha.trim();


    if (!nomeLimpo || !emailLimpo || !senhaLimpa) {
      setMensagem('Preencha todos os campos para continuar.');
      return;
    }


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailLimpo)) {
      setMensagem('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    if (senhaLimpa.length < 8) {
      setMensagem('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    setMensagem('');
    console.log('Dados de login:', { nome: nomeLimpo, email: emailLimpo, senha: senhaLimpa });
    navigate('/dadoscadastro');
  }


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

          <form className={styles.formulario} id="form-cadastro" onSubmit={lidarComSubmit} noValidate>
            <div className={styles.campoPreenchimento}>
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Marina Oliveira"
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
                  placeholder="Crie uma senha"
                  autoComplete="new-password"
                  aria-describedby="requisito"
                  minLength={8}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <button
                  className={styles.botaoMostrarSenha}
                  type="button"
                  aria-label="Mostrar senha"
                  onClick={alternarVisibilidadeSenha}
                >
                  {mostrarSenha ? (
                    <FaEyeSlash size={18} aria-hidden="true" />
                  ) : (
                    <FaEye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
              <span id="requisito" className={styles.campoRequisito}>mínimo 8 caracteres</span>
            </div>

            {mensagem && (
              <p id="mensagem" className={styles.mensagem} role="alert">
                {mensagem}
              </p>
            )}

            <button className={styles.botaoCadastrar} type="submit">
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