import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CriarContaPage } from './pages/CriarContaPage';
import { DadosCadastroPage } from './pages/DadosCadastroPage';
import { FavoritosPage } from './pages/FavoritosPage';
import { LinhasPage } from './pages/LinhasPage';
import { PontosPage } from './pages/PontosPage';
import { MapasPage } from './pages/MapasPage.jsx';

import './global.css';

function Layout() {
  return (
    <div className="appContainer">

      <Outlet />

    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas que já renderizam seu próprio Cabecalho e Rodape */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-conta" element={<CriarContaPage />} />

        {/* Rotas de Usuário */}
        <Route element={<Layout variante="usuario" />}>
          <Route path="/dadoscadastro" element={<DadosCadastroPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/linhas" element={<LinhasPage />} />
          <Route path="/pontos" element={<PontosPage />} />
          <Route path="/mapas" element={<MapasPage />} />
        </Route>

        {/* Rotas de Administrador */}
        <Route element={<Layout variante="admin" />}>
          {/* Rotas de admin */}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;