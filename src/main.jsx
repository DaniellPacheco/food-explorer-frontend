import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
