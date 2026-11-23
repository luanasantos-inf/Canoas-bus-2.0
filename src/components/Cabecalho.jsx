import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import { useTema } from '../hooks/useTema.js';
import { FiSun, FiMoon } from 'react-icons/fi';

const CLASSES_VARIANTE = {
  publico: styles.cabecalhoPublico,
  usuario: styles.cabecalhoUsuario,
  admin: styles.cabecalhoAdmin,
};

export function Cabecalho({ variante = 'publico', nomeUsuario }) {
  const { tema, alternarTema } = useTema();
  const ehEscuro = tema === 'dark';
  const classeVariante = CLASSES_VARIANTE[variante] || '';

  return (
    <header className={`${styles.cabecalho} ${classeVariante}`.trim()}>
      <div className={styles.cabecalhoLogo}>
        <i className="fa-solid fa-bus-simple" aria-hidden="true"></i>
      </div>

      <div className={styles.cabecalhoTituloLocalizacao}>
        <h1 className={styles.cabecalhoTitulo}>Canoas Bus</h1>

        <div className={styles.cabecalhoLocalizacao}>
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          <p>Canoas, RS</p>
        </div>

        <button
          className={styles.mudarTema}
          type="button"
          onClick={alternarTema}
          aria-label={ehEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {ehEscuro ? 'Modo claro' : 'Modo escuro'}
        </button>
      </div>

      {/* Variação 1: Padrão / Público (Ex: Login e Criar Conta - sem menu extra) */}
      {variante === 'publico' && null}

      {/* Variação 2: Usuário logado */}
      {variante === 'usuario' && (
        <nav className={styles.cabecalhoNavegacao} aria-label="Menu do usuário">
          <Link to="mapas">Mapas</Link>
          <Link to="pontos">Pontos</Link>
          <Link to="/linhas">Linhas</Link>
          <Link to="/favoritos">Favoritos</Link>
          {nomeUsuario && <span className={styles.cabecalhoUsuario}>{nomeUsuario}</span>}
          <button type="button" className={styles.cabecalhoSair}>Sair</button>
        </nav>
      )}

      {/* Variação 3: Administrador */}
      {variante === 'admin' && (
        <nav className={styles.cabecalhoNavegacao} aria-label="Menu administrativo">
          <span className={styles.cabecalhoBadgeAdmin}>Admin</span>
          <Link to="/admin/linhas">Gerenciar Linhas</Link>
          <Link to="/admin/pontos">Gerenciar Pontos</Link>
          <button type="button" className={styles.cabecalhoSair}>Sair</button>
        </nav>
      )}
    </header>
  );
}