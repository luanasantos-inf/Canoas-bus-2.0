import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import styles from './LinhasPage.module.css';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdPin } from "react-icons/io";

export function LinhasPage() {
    return (
        <div className={styles.paginaLinhasWrapper}>
            <Cabecalho variante="usuario" />

            <main className={styles.mainLinhas}>
                <aside className={styles.breadcrumbContainer}>
                    <nav aria-label="breadcrumb">
                        <ol className={styles.breadcrumb}>
                            <li><Link to="/dadoscadastro">Meu cadastro</Link></li>
                            <li aria-current="page">Linhas</li>
                        </ol>
                    </nav>
                </aside>

                <div className={styles.conteudoCabecalho}>
                    <div>
                        <h1 className={styles.dadosTitulo}>Linhas de ônibus</h1>
                        <p className={styles.conteudoDescricao}>
                            Organize as linhas e seus itinerários.
                        </p>
                    </div>
                </div>

                <div className={styles.barraBusca}>
                    <div className={styles.campoBusca}>
                        <input
                            type="search"
                            id="busca"
                            placeholder="Buscar nome ou número"
                            aria-label="Buscar linha por nome ou número"
                        />
                        <HiMagnifyingGlass size={18} aria-hidden="true" />
                    </div>
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
