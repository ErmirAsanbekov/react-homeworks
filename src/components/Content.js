import React from 'react';
import { useTheme } from './ThemeProvider';

function Content() {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      <p>Это контент с темой {theme}</p>
    </div>
  );
}

export default Content;
