import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from '@/App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

Sentry.init({
  dsn: 'https://3a0217d88e1a10d00095e11ac9ae7a3a@o4506583607279616.ingest.sentry.io/4506583610884096',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [
        'localhost',
        /^https:\/\/jackpot-letter-daebak\.kr\.com\/api/
      ]
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false
    })
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
