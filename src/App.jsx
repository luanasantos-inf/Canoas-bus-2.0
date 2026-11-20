import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { LoginPage } from './pages/LoginPage';
import { CriarContaPage } from './pages/CriarContaPage';
import { LinhasPage } from './pages/LinhasPage';


export function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Cabecalho />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/criar-conta" element={<CriarContaPage />} />
          <Route path="/linhas" element={<LinhasPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;