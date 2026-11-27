import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './MapasAdm.module.css';

export function MapasAdm() {
  return (
    <div classname={styles.paginaMapasAdmWrapper}>
    <main className={mainMapaArea}>
      <Cabecalho variante="admin"/>
      <div id="mapa" aria-label="Mapa de Canoas" />

      <section className={styles.mapaBusca} aria-labelledby="titulo-busca">
        <h2 id="tituloBusca">Para onde vamos?</h2>
        <p>Explore os pontos de Canoas.</p>

        <label htmlFor="busca-mapa">Buscar ponto ou linha</label>
        <input
          id="busca-mapa"
          type="search"
          placeholder="Buscar ponto ou linha"
        />
      </section>

      <section
        id="detalhes-ponto"
        className={styles.mapaDetalhes}
        aria-labelledby="nome-ponto"
        hidden
      >
        <button id="fecharDetalhes" type="button">
          Fechar
        </button>

        <p>Ponto de ônibus</p>
        <h2 id="nome-ponto" />
        <p id="endereco-ponto" />
        <p id="linhas-ponto" />
      </section>
    </main>
    </div>
  );
}
export default MapasAdm;