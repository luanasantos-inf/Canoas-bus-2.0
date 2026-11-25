import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../components/Cabecalho';
import { Rodape } from '../components/Rodape';
import styles from './PontosPage.module.css'

export function PontosPage() {
    return (
        <div className={styles.paginaPontosWrapper}>

            <Cabecalho variante="usuario" />
            <main class={styles.mainPontos}>

                <h1 class={styles.titulo}>Pontos de ônibus</h1>
                <p class={styles.conteudoDescricao}>
                    Encontre os locais de embarque e favorite os que você mais usa.
                </p>

      <div class={styles.barraBusca}>
        <div class={styles.campoBusca}>
          <input
            type="search"
            id="busca"
            placeholder="Buscar nome ou endereço"
            aria-label="Buscar ponto por nome ou endereço"
          />
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
        <p class={styles.contador} id="contador" aria-live="polite"></p>
      </div>

      <div class={styles.gradeCartoes} id="grade-pontos"></div>
      <p class={styles.vazio} id="mensagem-vazia" hidden>Nenhum ponto encontrado.</p>
      <button type="button" class={styles.botaoMais} id="mostrar-mais" hidden>
        Mostrar mais
      </button>
    </main >
        <Rodape />
    </div >
);
}
export default PontosPage;