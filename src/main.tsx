import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import { StoreProvider } from './contexts/Store'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </StoreProvider>
  </QueryClientProvider>
)
