import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './FavoritosPage.module.css';

export function FavoritosPage() {
    return (

        <div className={styles.paginaFavoritosWrapper}>
            <Cabecalho variante="usuario" />


            <main className={styles.mainFavoritos}>
                <div className={styles.conteudoCabecalho}>
                    <div>
                        <h1 className={styles.conteudoTitulo}>Favoritos</h1>
                        <p className={styles.conteudoDescricao}>
                            As linhas e os pontos que você salvou.
                        </p>
                    </div>
                </div>

                <div className={styles.abas} role="tablist" aria-label="Tipo de favorito">
                    <button
                        type="button"
                        className={styles.aba}
                        role="tab"
                        id="aba-linhas"
                        data-aba="linhas"
                        aria-selected="true"
                        aria-controls="painel-linhas"
                    >
                        Linhas
                    </button>
                    <button
                        type="button"
                        className={styles.aba}
                        role="tab"
                        id="aba-pontos"
                        data-aba="pontos"
                        aria-selected="false"
                        aria-controls="painel-pontos"
                    >
                        Pontos
                    </button>
                </div>

                <section id="painel-linhas" role="tabpanel" aria-labelledby="aba-linhas">
                    <div className={styles.gradeCartoes} id="grade-favoritas"></div>
                    <p className={styles.vazio} id="vazio-linhas" hidden>
                        Você ainda não favoritou nenhuma linha.
                        <a className={styles.linkDestaque} href="linhas-cliente.html">Ver linhas</a>
                    </p>
                </section>

                <section
                    id="painel-pontos"
                    role="tabpanel"
                    aria-labelledby="aba-pontos"
                    hidden
                >
                    <div className={styles.gradeCartoes} id="grade-pontos-favoritos"></div>
                    <p className={styles.vazio} id="vazio-pontos" hidden>
                        Você ainda não favoritou nenhum ponto.
                        <a className={styles.linkDestaque} href="pontos-cliente.html">Ver pontos</a>
                    </p>
                </section>
            </main>

            <Rodape />
        </div >
    );
}
export default FavoritosPage;