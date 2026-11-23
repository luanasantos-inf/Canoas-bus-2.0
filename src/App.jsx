import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CriarContaPage } from './pages/CriarContaPage';
import { DadosCadastroPage } from './pages/DadosCadastroPage';
import './global.css';

function Layout() {
  return (
    <div className="app-container">
      
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