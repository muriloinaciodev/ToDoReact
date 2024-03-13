import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/main.scss'
import { NotesContextProvider } from './context/NotesContext.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
