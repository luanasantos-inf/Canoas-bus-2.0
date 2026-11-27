import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './PontosAdm.module.css';

export function PontosAdm({ onSalvar }) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [linhasSelecionadas, setLinhasSelecionadas] = useState([]);
  const [erros, setErros] = useState({});

  function validarCampos() {
    const novosErros = {};

    if (!nome.trim()) {
      novosErros.nome = "Informe o nome do ponto.";
    }

    if (!endereco.trim()) {
      novosErros.endereco = "Informe o endereço do ponto.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validarCampos()) {
      return;
    }

    const dadosPonto = {
      nome: nome.trim(),
      endereco: endereco.trim(),
      latitude: latitude || null,
      longitude: longitude || null,
      linhas: linhasSelecionadas,
    };

    if (onSalvar) {
      onSalvar(dadosPonto);
    } else {
      console.log("Ponto salvo:", dadosPonto);
    }

    setNome("");
    setEndereco("");
    setLatitude("");
    setLongitude("");
    setLinhasSelecionadas([]);
    setErros({});
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

  return (
     <div className={styles.paginaPontosAdmWrapper}>
    <Cabecalho variante="admin"/>
    <main className="mainPontosAdm">
          <h1 className="conteudoTitulo" id="tituloPagina">
            Novo ponto
          </h1>
          <p className="conteudoDescricao" id="subtituloPagina">
            Conecte um local às linhas da cidade.
          </p>

      <form
        className="cartaoFormulario formularioPonto"
        id="formPonto"
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className="cartaoFormularioTitulo">Informações do ponto</h2>

        <div className="pontoGrade">
          <div className="campo">
            <label htmlFor="nome">Nome do ponto</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex.: Estação Canoas"
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
            <p className="campoErro" id="erroNome" role="alert">
              {erros.nome || ""}
            </p>
          </div>

          <div className="campo">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Ex.: Av. Victor Barreto - Centro"
              maxLength={100}
              autoComplete="off"
              value={endereco}
              onChange={(e) => {
                setEndereco(e.target.value);
                limparErro("endereco");
              }}
              aria-invalid={Boolean(erros.endereco)}
              aria-describedby="erro-endereco"
            />
            <p className="campoErro" id="erroEndereco" role="alert">
              {erros.endereco || ""}
            </p>
          </div>

          {/* MAPA: o colega do mapa conecta aqui (veja o texto pro colega) */}
          <div className="campo campoMapa">
            <span className="campoRotulo">Localização no mapa</span>
            <div className="mapaPonto" id="mapaPonto">
              <p>O mapa será conectado aqui.</p>
            </div>
            <p className="campoAjuda">Clique no mapa para marcar o ponto.</p>
            <input
              type="hidden"
              id="latitude"
              name="latitude"
              value={latitude}
            />
            <input
              type="hidden"
              id="longitude"
              name="longitude"
              value={longitude}
            />
          </div>

          <fieldset className="grupoLinhas">
            <legend>Linhas vinculadas</legend>
            <div className="listaLinhas" id="listaLinhas" />
            <p className="campoAjuda" id="contagemLinhas" aria-live="polite">
              {linhasSelecionadas.length > 0
                ? `${linhasSelecionadas.length} linha(s) selecionada(s)`
                : "Nenhuma linha selecionada"}
            </p>
          </fieldset>
        </div>

        <div className="acoesFormulario">
          <a className="botaoSecundario" href="pontos.html">
            Cancelar
          </a>
          <button type="submit" className="botaoPrincipal" id="botaoSalvar">
            Salvar ponto
          </button>
        </div>
      </form>
    </main>
    </div>
  );
}
export default PontosAdm;