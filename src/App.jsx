import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from "./AuthContext";

import { LoginPage } from './pages/publico/LoginPage.jsx'
import { CriarContaPage } from './pages/publico/CriarContaPage.jsx';

import { DadosCadastroPage } from './pages/usuario/DadosCadastroPage.jsx';
import { FavoritosPage } from './pages/usuario/FavoritosPage.jsx';
import { LinhasPage } from './pages/usuario/LinhasPage.jsx';
import { PontosPage } from './pages/usuario/PontosPage.jsx';
import { MapasPage } from './pages/usuario/MapasPage.jsx';

import {MapasAdm} from './pages/administrador/MapasAdm.jsx';
import { LinhasAdm } from './pages/administrador/LinhasAdm.jsx';
import {PontosAdm} from './pages/administrador/PontosAdm.jsx';

import './global.css';

function Layout({ variante }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  if (variante === "admin" && usuario.role !== "admin") {
    return <Navigate to="/mapas" replace />;
  }

  if (variante === "usuario" && usuario.role !== "usuario") {
    return <Navigate to="/mapasadm" replace />;
  }

  return (
    <div className="appContainer">
      <Outlet />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-conta" element={<CriarContaPage />} />

        <Route element={<Layout variante="usuario" />}>
          <Route path="/usuario/dadoscadastro" element={<DadosCadastroPage />} />
          <Route path="/usuario/favoritos" element={<FavoritosPage />} />
          <Route path="/usuario/linhas" element={<LinhasPage />} />
          <Route path="/usuario/pontos" element={<PontosPage />} />
          <Route path="/usuario/mapas" element={<MapasPage />} />
        </Route>

        <Route element={<Layout variante="admin" />}>
          <Route path="/admin/MapasAdm" element={<MapasAdm />} />
          <Route path="/admin/linhasadm" element={<LinhasAdm />} />
          <Route path="/admin/pontosadm" element={<PontosAdm />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;