import React from 'react';
import { useTheme } from './ThemeProvider';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Тема: {theme}</h1>
      <button onClick={toggleTheme}>Сменить тему</button>
    </header>
  );
}

export default Header;