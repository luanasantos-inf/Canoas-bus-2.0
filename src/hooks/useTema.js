import { useEffect, useState } from 'react';

export function useTema() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema');
    if (salvo === 'dark' || salvo === 'light') return salvo;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  function alternarTema() {
    setTema((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return { tema, setTema, alternarTema };
}