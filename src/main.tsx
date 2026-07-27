import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n, { applyDir } from './i18n'
import App from './App.tsx'

// Honor the language auto-detected/persisted in i18n (incl. RTL) on first paint.
applyDir(i18n.language)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
