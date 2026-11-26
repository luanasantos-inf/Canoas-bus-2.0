import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './LinhasPage.module.css';

export function LinhasPage() {
    return (
        <div className={styles.paginaLinhasWrapper}>
            <Cabecalho variante="usuario" />

            <main className={styles.mainLinhas}>
                <p className={styles.conteudoTrilha}>ADMINISTRAÇÃO / LINHAS</p>

                <div className={styles.conteudoCabecalho}>
                    <div>
                        <h1 className={styles.conteudoTitulo}>Linhas de ônibus</h1>
                        <p className={styles.conteudoDescricao}>
                            Organize as linhas e seus itinerários.
                        </p>
                    </div>
                    <a className={styles.botaoPrincipal} href="nova-linha.html">
                        <i className="fa-solid fa-plus" aria-hidden="true"></i> Nova linha
                    </a>
                </div>

                <p className={styles.avisoSucesso} id="aviso" role="status"></p>
                <div className={styles.barraBusca}>
                    <div className={styles.campoBusca}>
                        <input
                            type="search"
                            id="busca"
                            placeholder="Buscar número ou nome"
                            aria-label="Buscar linha por número ou nome"
                        />
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </div>
                    <p className={styles.contador} id="contador" aria-live="polite"></p>
                </div>


                <div className={styles.tabelaCaixa}>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>NÚMERO</th>
                                <th>NOME</th>
                                <th>ITINERÁRIO</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody id="tabela-linhas"></tbody>
                    </table>
                    <div className={styles.tabelaRodape}>
                        <span id="tabela-resumo"></span>
                        <span>Página 1 de 1</span>
                    </div>
                </div>


                <div className={styles.cartoes} id="cartoes-linhas"></div>

                <p className={styles.vazio} id="mensagem-vazia" hidden>Nenhuma linha encontrada.</p>
            </main>

            <Rodape />
        </div>
    );
}
export default LinhasPage;
