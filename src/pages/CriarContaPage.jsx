import { Link } from 'react-router-dom';

export function CriarContaPage() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <h2>Criar conta</h2>
      <p>Cadastre-se para usar o Canoas Bus.</p>
      <Link to="/">Voltar para o login</Link>
    </main>
  );
}