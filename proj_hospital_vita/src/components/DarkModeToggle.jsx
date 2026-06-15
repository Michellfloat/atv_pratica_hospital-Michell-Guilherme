import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
  // Verifica se o usuário já tinha uma preferência salva no navegador
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Atualiza a classe no <body> sempre que o estado mudar
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      className="dark-mode-btn" 
      onClick={() => setIsDark(!isDark)}
      aria-label="Alternar modo escuro"
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
}