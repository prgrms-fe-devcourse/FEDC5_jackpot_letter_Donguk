import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '@components/Post/';
import Comment from '@components/PostComment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from '@/App.tsx';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/_reset';
import global from './styles/global';
import { theme } from './theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={theme}>
      <Global styles={[reset, global]} />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<App />}
            />
            <Route
              path="/post"
              element={<Post />}
            />
            <Route
              path="/comment"
              element={<Comment />}
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  </QueryClientProvider>
);
