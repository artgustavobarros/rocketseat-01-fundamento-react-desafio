import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes.ts'
import GlobalStyles from './styles/globals.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
