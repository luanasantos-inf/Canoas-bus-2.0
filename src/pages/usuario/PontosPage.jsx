import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './PontosPage.module.css'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdPin } from "react-icons/io";



export function PontosPage() {
  return (
    <div className={styles.paginaPontosWrapper}>

      <Cabecalho variante="usuario" />
      <main className={styles.mainPontos}>

        <aside className={styles.breadcrumbContainer}>
          <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
              <li><Link to="/dadoscadastro">Meu cadastro</Link></li>
              <li aria-current="page">Pontos</li>
            </ol>
          </nav>

          <h1 className={styles.dadosTitulo}>Pontos de ônibus</h1>
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
            <HiMagnifyingGlass size={18} aria-hidden="true" />
          </div>
          <p className={styles.contador} id="contador" aria-live="polite"></p>
        </div>

        <p className={styles.vazio} id="mensagem-vazia" hidden>Nenhum ponto encontrado.</p>

        <div className={styles.gradeCartoes} id="grade-pontos">
          <div className={styles.cabecalhoLista}>
            <span>Ponto/Endereço</span>
            <span>Linhas</span>
          </div>
          <div>
            <div className={styles.cartaoPonto}>
              <div className={styles.infoPonto}>
                <div className={styles.iconeLocal}>
                <IoMdPin />
                </div>
                <div className={styles.textoPonto}>
                  <h3 className={styles.nomePonto}>Estação Canoas</h3>
                  <p className={styles.enderecoPonto}>Av. Victor Barreto · Centro</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listaLinhas}>
            <span className={styles.badgeLinha}>101</span>
            <span className={styles.badgeLinha}>205</span>
          </div>
        </div>


      </main >
      <Rodape />
    </div >
  );
}
export default PontosPage;