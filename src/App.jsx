import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginPage } from './pages/publico/LoginPage.jsx'
import { CriarContaPage } from './pages/publico/CriarContaPage.jsx';
import { DadosCadastroPage } from './pages/usuario/DadosCadastroPage.jsx';
import { FavoritosPage } from './pages/usuario/FavoritosPage.jsx';
import { LinhasPage } from './pages/usuario/LinhasPage.jsx';
import { PontosPage } from './pages/usuario/PontosPage.jsx';
import { MapasPage } from './pages/usuario/MapasPage.jsx';

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
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-conta" element={<CriarContaPage />} />

        <Route element={<Layout variante="usuario" />}>
          <Route path="/dadoscadastro" element={<DadosCadastroPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/linhas" element={<LinhasPage />} />
          <Route path="/pontos" element={<PontosPage />} />
          <Route path="/mapas" element={<MapasPage />} />
        </Route>


        <Route element={<Layout variante="admin" />}>
          {/* Rotas de admin */}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;