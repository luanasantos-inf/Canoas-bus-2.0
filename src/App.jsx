import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { LoginPage } from './pages/LoginPage';
import { CriarContaPage } from './pages/CriarContaPage';
import { LinhasPage } from './pages/LinhasPage';

function Layout({ variante = 'publico' }) {
  return (
    <div className="app-container">
      <Cabecalho variante={variante} />
      <Outlet />
      <Rodape />
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
          <Route path="/linhas" element={<LinhasPage />} />
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