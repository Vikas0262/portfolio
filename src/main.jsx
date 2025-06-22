import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

if (typeof window !== "undefined") {
  window.scrollTo(0, 0);
}
if (typeof document !== 'undefined') {
  document.body.classList.add('dark');
}

if (navigator.userAgent === 'ReactSnap') {
  window.snapSaveState = () => {
    return new Promise(resolve => setTimeout(resolve, 200));
  };
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
