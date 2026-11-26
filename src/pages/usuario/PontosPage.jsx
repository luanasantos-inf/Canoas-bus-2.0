import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './PontosPage.module.css'

export function PontosPage() {
  return (
    <div className={styles.paginaPontosWrapper}>

      <Cabecalho variante="usuario" />
      <main className={styles.mainPontos}>

        <aside className={styles.breadcrumbContainer}>
          <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><a href="#">Minha conta</a></li>
              <li><a href="#">Pontos</a></li>
            </ol>
          </nav>

          <h1 className={styles.dadosTitulo}>Meu perfil</h1>
          <span className={styles.dadosSubtitulo}>Seus dados, sempre em dia.</span>
        </aside>
        <p className={styles.conteudoDescricao}>
          Encontre os locais de embarque e favorite os que você mais usa.
        </p>

        <div className={styles.barraBusca}>
          <div className={styles.campoBusca}>
            <input
              type="search"
              id="busca"
              placeholder="Buscar nome ou endereço"
              aria-label="Buscar ponto por nome ou endereço"
            />
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </div>
          <p className={styles.contador} id="contador" aria-live="polite"></p>
        </div>

        <div className={styles.gradeCartoes} id="grade-pontos"></div>
        <p className={styles.vazio} id="mensagem-vazia" hidden>Nenhum ponto encontrado.</p>
        <button type="button" className={styles.botaoMais} id="mostrar-mais" hidden>
          Mostrar mais
        </button>
      </main >
      <Rodape />
    </div >
  );
}
export default PontosPage;