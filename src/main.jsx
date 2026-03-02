import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" richColors closeButton />
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
