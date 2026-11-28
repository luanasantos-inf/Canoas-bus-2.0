import { useState } from "react";
import { Link } from "react-router-dom";
import { Cabecalho } from '../../components/Cabecalho';
import styles from "./LinhasAdm.module.css";

export function LinhasAdm({ onSalvar }) {
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");
  const [itinerario, setItinerario] = useState("");
  const [erros, setErros] = useState({});

  function validarCampos() {
    const novosErros = {};

    if (!numero.trim()) {
      novosErros.numero = "Informe o número da linha.";
    }

    if (!nome.trim()) {
      novosErros.nome = "Informe o nome da linha.";
    }

    if (!itinerario.trim()) {
      novosErros.itinerario = "Informe o itinerário da linha.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function limparErro(campo) {
    if (erros[campo]) {
      setErros((prev) => {
        const atualizado = { ...prev };
        delete atualizado[campo];
        return atualizado;
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validarCampos()) {
      return;
    }

    const dadosLinha = {
      numero: numero.trim(),
      nome: nome.trim(),
      itinerario: itinerario.trim(),
    };

    if (onSalvar) {
      onSalvar(dadosLinha);
    } else {
      console.log("Linha salva:", dadosLinha);
    }

    setNumero("");
    setNome("");
    setItinerario("");
    setErros({});
  }

  return (
    <div className={styles.paginaLinhasAdmWrapper}>
      <Cabecalho variante="admin" />
    <main className={styles.mainLinhasAdm}>

          <h1 className={styles.conteudoTitulo} id="tituloPagina">
            Nova linha
          </h1>
          <p className={styles.conteudoDescricao} id="subtituloPagina">
            Cadastre uma linha e defina seu percurso.
          </p>

      <div className={styles.layoutFormulario}>
        <form
          className={styles.cartaoFormulario}
          id="formLinha"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className={styles.cartaoFormularioTitulo}>Informações da linha</h2>

          <div className={styles.campo}>
            <label htmlFor="numero">Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              placeholder="Ex.: 101"
              maxLength={10}
              autoComplete="off"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
                limparErro("numero");
              }}
              aria-invalid={Boolean(erros.numero)}
              aria-describedby="erro-numero"
            />
            <p className={styles.campoErro} id="erroNumero" role="alert">
              {erros.numero || ""}
            </p>
          </div>

          <div className={styles.campo}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex.: Centro · Unilasalle"
              maxLength={60}
              autoComplete="off"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                limparErro("nome");
              }}
              aria-invalid={Boolean(erros.nome)}
              aria-describedby="erro-nome"
            />
            <p className={styles.campoErro} id="erroNome" role="alert">
              {erros.nome || ""}
            </p>
          </div>

          <div className={styles.campo}>
            <label htmlFor="itinerario">Itinerário</label>
            <textarea
              id="itinerario"
              name="itinerario"
              rows={4}
              placeholder="Ex.: Estação Canoas → Av. Victor Barreto → Unilasalle"
              value={itinerario}
              onChange={(e) => {
                setItinerario(e.target.value);
                limparErro("itinerario");
              }}
              aria-invalid={Boolean(erros.itinerario)}
              aria-describedby="ajuda-itinerario erro-itinerario"
            />
            <p className={styles.campoAjuda} id="ajudaItinerario">
              Informe os principais locais do percurso.
            </p>
            <p className={styles.campoErro} id="erroItinerario" role="alert">
              {erros.itinerario || ""}
            </p>
          </div>

          <div className={styles.acoesFormulario}>
            <Link className={styles.botaoSecundario} to="/linhasadm">
              Cancelar
            </Link>
            <button type="submit" className={styles.botaoPrincipal} id="botaoSalvar">
              Salvar linha
            </button>
          </div>
        </form>

        <aside className={styles.avisoLateral} id="avisoLateral">
          <span className={styles.selo} id="avisoNumero">
            {numero.trim() || "—"}
          </span>
          <h3 className={styles.avisoLateralTitulo}>Cada linha é única</h3>
          <p id="aviso-texto">
            {nome.trim()
              ? `Você está cadastrando a linha ${nome.trim()}.`
              : "Preencha o número, o nome e o itinerário para cadastrar uma nova linha."}
          </p>
        </aside>
      </div>
    </main>
    </div>
  );
}

export default LinhasAdm;