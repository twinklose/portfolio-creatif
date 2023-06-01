import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/routes.ts'
import { RouterProvider } from 'react-router-dom'
import DarkModeProvider from './contexts/DarkModeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
)
