import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from '@/App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

Sentry.init({
  dsn: 'https://4a1ca6d4b39692fe0fd32bd1591dbf64@o4506583607279616.ingest.sentry.io/4506584655527936',
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

if (import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS);
}
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
