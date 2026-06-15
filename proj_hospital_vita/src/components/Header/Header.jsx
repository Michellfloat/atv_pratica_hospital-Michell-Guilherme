import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle'; // Importando o seu botão!
import './style.css'; 

export default function Header() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo/Identidade */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🩺</span>
          <span className="logo-text">Vita<span className="logo-accent">Clínica</span></span>
        </Link>

        {/* Links de Navegação */}
        <nav className="navbar-navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Início
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Quem Somos
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Especialidades
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Corpo Clínico
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contato
          </NavLink>
        </nav>

        {/* CTA e Modo Escuro */}
        <div className="navbar-cta" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <DarkModeToggle /> {/* Seu componente inserido com sucesso aqui! */}
          <Link to="/contact" className="btn-schedule">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
}