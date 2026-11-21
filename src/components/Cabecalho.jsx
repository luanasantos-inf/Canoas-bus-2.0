import { Link } from 'react-router-dom';
import './Cabecalho.css';

export function Cabecalho({ variante = 'publico', nomeUsuario }) {
  return (
    <header className={`cabecalho cabecalho--${variante}`}>
      <div className="cabecalho-logo">
        <i className="fa-solid fa-bus-simple" aria-hidden="true"></i>
      </div>

      <div className="cabecalho-titulo-localizacao">
        <h1 className="cabecalho-titulo">Canoas Bus</h1>

        <div className="cabecalho-localizacao">
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          <p>Canoas, RS</p>
        </div>
      </div>

      {/* Variação 1: Padrão / Público (Ex: Login e Criar Conta - sem menu extra) */}
      {variante === 'publico' && null}

      {/* Variação 2: Usuário logado */}
      {variante === 'usuario' && (
        <nav className="cabecalho-navegacao" aria-label="Menu do usuário">
          <Link to="/linhas">Linhas</Link>
          <Link to="/favoritos">Favoritos</Link>
          {nomeUsuario && <span className="cabecalho-usuario">{nomeUsuario}</span>}
          <button type="button" className="cabecalho-sair">Sair</button>
        </nav>
      )}

      {/* Variação 3: Administrador */}
      {variante === 'admin' && (
        <nav className="cabecalho-navegacao" aria-label="Menu administrativo">
          <span className="cabecalho-badge-admin">Admin</span>
          <Link to="/admin/linhas">Gerenciar Linhas</Link>
          <Link to="/admin/pontos">Gerenciar Pontos</Link>
          <button type="button" className="cabecalho-sair">Sair</button>
        </nav>
      )}
    </header>
  );
}