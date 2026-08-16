import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo-icon">📋</span>
        <h1>Task Manager</h1>
      </div>
      <p className="subtitle">Manage tasks efficiently</p>
    </header>
  );
}
