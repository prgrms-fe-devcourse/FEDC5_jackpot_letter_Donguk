import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from '@/App.tsx';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/_reset';
import global from './styles/global';
import { theme } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={theme}>
      <Global styles={[reset, global]} />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </QueryClientProvider>
);
