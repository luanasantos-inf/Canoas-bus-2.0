import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import percursoLight from '../../assets/percurso-ilustrativo.png'
import percursoDark from '../../assets/percurso-ilustrativo-dark.png';
import styles from './CadastroAdm.module.css';

export function CadastroAdm() {
  const [nome, setNome] = useState('Marina Oliveira');
  const [email, setEmail] = useState('marina@email.com');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const navigate = useNavigate();

  function lidarComSubmit(event) {
    event.preventDefault();
    setSalvo(true);
  }

  function handleConfirmarExclusao() {
    setModalAberto(false);
    navigate('/');
  }

  return (
    <div className={styles.CadastroAdmWrapper}>
      <Cabecalho variante="admin" />

      <main className={styles.mainDados}>
        <aside className={styles.dadosCabecalhoContainer}>
          <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><a href="#perfil">Minha conta</a></li>
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
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>

              <div className={styles.campoPreenchimento}>
                <label htmlFor="e-mail">E-mail</label>
                <input
                  type="email"
                  id="e-mail"
                  name="e-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setSenha(event.target.value)}
                    placeholder="Crie uma senha"
                    autoComplete="new-password"
                    aria-describedby="requisito"
                    minLength={8}
                  />
                  <button
                    className={styles.botaoMostrarSenha}
                    type="button"
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                    onClick={() => setMostrarSenha((estadoAtual) => !estadoAtual)}
                  >
                    {mostrarSenha ? (
                      <FaEyeSlash size={18} aria-hidden="true" />
                    ) : (
                      <FaEye size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p id="requisito" className={styles.campoRequisito}>
                  mínimo 8 caracteres · Deixe em branco para manter.
                </p>
              </div>

              <div className={styles.acoesFormulario}>
                <button className={styles.botaoSalvar} type="submit">Salvar alterações</button>
                {salvo && <div className={styles.statusAtualizado}>Dados atualizados</div>}
              </div>
            </div>

            <div className={styles.secaoFrase}>
              <h3>Painel do ADM</h3>
              <p>
                Seu perfil é usado para editar o mapa, as linhas e os pontos de Canoas.
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
            <button
              type="button"
              className={styles.botaoExcluir}
              onClick={() => setModalAberto(true)}
            >
              Excluir conta
            </button>

            {modalAberto && (
              <div
                className={styles.modalOverlay}
                onClick={() => setModalAberto(false)}
              >
                <div
                  className={styles.modalContainer}
                  onClick={(event) => event.stopPropagation()}
                >
                  <h2>Excluir sua conta?</h2>
                  <p>
                    Seu acesso e seus dados serão removidos. Não é possível desfazer
                    esta ação.
                  </p>

                  <div className={styles.modalBtns}>
                    <button
                      type="button"
                      className={styles.botaoCancelar}
                      onClick={() => setModalAberto(false)}
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className={styles.botaoConfirmarExclusao}
                      onClick={handleConfirmarExclusao}
                    >
                      Excluir conta
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
export default CadastroAdm;
