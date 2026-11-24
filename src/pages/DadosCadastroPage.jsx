import { useState } from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from './DadosCadastroPage.module.css';
import percursoLight from '../assets/percurso-ilustrativo.svg';
import percursoDark from '../assets/percurso-ilustrativo-dark.svg';


export function DadosCadastroPage() {
  const [nome, setNome] = useState('Marina Oliveira');
  const [email, setEmail] = useState('marina@email.com');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [salvo, setSalvo] = useState(false);

  function lidarComSubmit(event) {
    event.preventDefault();
    setSalvo(true);
  }

  return (
    <div className={styles.paginaDadosCadastroWrapper}>
      <Cabecalho variante="usuario" />

      <main className={styles.mainDados}>
        <aside className={styles.dadosCabecalhoContainer}>
          <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><a href="#">Minha conta</a></li>
            </ol>
          </nav>

          <h1 className={styles.dadosTitulo}>Meu perfil</h1>
          <span className={styles.dadosSubtitulo}>Seus dados, sempre em dia.</span>
        </aside>

        <form className={styles.formulario} id="form-perfil" onSubmit={lidarComSubmit} noValidate>
          <section className={styles.principalDados}>
            <div className={styles.secaoDados}>
              <h2>Dados pessoais</h2>
              <span>Atualize suas informações de acesso.</span>

              <div className={styles.campoPreenchimento}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.campoPreenchimento}>
                <label htmlFor="senha">Nova senha</label>
                <div className={styles.campoPreenchimentoSenha}>
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    id="senha"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Crie uma senha"
                    autoComplete="new-password"
                    aria-describedby="requisito"
                    minLength={8}
                  />
                  <button
                    className={styles.botaoMostrarSenha}
                    type="button"
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                    onClick={() => setMostrarSenha((prev) => !prev)}
                  >
                    <i
                      className={`fa-solid ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
                <p id="requisito" className={styles.campoRequisito}>
                  mínimo 8 caracteres · Deixe em branco para manter.
                </p>
              </div>

              <div className={styles.acoesformulario}>
                <button className={styles.botaoSalvar} type="submit">Salvar alterações</button>
                {salvo && <div className={styles.statusAtualizado}>Dados atualizados</div>}
              </div>

            </div>

            <div className={styles.secaoFrase}>
              <h3>Uma conta, toda a cidade.</h3>
              <p>
                Seu perfil é usado para acessar o mapa e consultar as linhas e os
                pontos de Canoas.
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
            </div>
          </section>

        </form>

        <div className={styles.secaoExcluir}>
          <div className={styles.secaoExcluirEsquerda}>
            <p>Excluir minha conta</p>
            <span>Esta ação é permanente.</span>
          </div>
          <div className={styles.secaoExcluirDireita}>
            <label htmlFor="modal-toggle" className={styles.botaoExcluir}>Excluir conta</label>

            <input type="checkbox" id="modal-toggle" className={styles.modalCheckbox} />

            <div className={styles.modalOverlay}>
              <div className={styles.modalContainer}>
                <h2>Excluir sua conta?</h2>
                <p>
                  Seu acesso e seus dados serão removidos. Não é possível desfazer
                  esta ação.
                </p>

                <div className={styles.modalBtns}>
                  <label htmlFor="modal-toggle" className={styles.botaoCancelar}>
                    Cancelar
                  </label>

                  <button type="button" className={styles.botaoConfirmarExclusao}>
                    Excluir conta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}