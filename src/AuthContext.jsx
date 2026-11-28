import { createContext, useContext, useState } from "react";

const CONTAS_DEV = {
  usuario: {
    id: 1,
    nome: "Usuário Dev",
    email: "usuario@canoasbus.com",
    senha: "12345678",
    role: "usuario",
  },
  admin1: {
    id: 2,
    nome: "Admin Dev1",
    email: "admin1@canoasbus.com",
    senha: "12345678",
    role: "admin",
  },
  admin2: {
    id: 3,
    nome: "Admin Dev2",
    email: "admin2@canoasbus.com",
    senha: "12345678",
    role: "admin",
  },
  admin3: {
    id: 4,
    nome: "Admin Dev3",
    email: "admin3@canoasbus.com",
    senha: "12345678",
    role: "admin",
  },
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function loginComo(tipo) {
    const conta = CONTAS_DEV[tipo];
    if (!conta) return null;
    const { senha: _, ...dadosSessao } = conta;
    setUsuario(dadosSessao);
    return dadosSessao;
  }

  function login(email, senha) {
    const emailLimpo = email.trim().toLowerCase();
    const encontrada = Object.values(CONTAS_DEV).find(
      (conta) =>
        conta.email.toLowerCase() === emailLimpo && conta.senha === senha
    );

    if (!encontrada) {
      return { ok: false, erro: "E-mail ou senha inválidos." };
    }

    const { senha: _, ...dadosSessao } = encontrada;
    setUsuario(dadosSessao);
    return { ok: true, usuario: dadosSessao };
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, loginComo, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return contexto;
}