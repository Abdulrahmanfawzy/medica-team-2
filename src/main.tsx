import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BookingProvider } from './lib/providers/BookingProvider'

createRoot(document.getElementById('root')!).render(
  <BookingProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </BookingProvider>,
)