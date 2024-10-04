import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginMachine from './TT';
import './style.css';

// Render to the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginMachine/>
  </StrictMode>
);
