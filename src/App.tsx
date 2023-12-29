import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Channel from '@/pages/Channel';
import ChannelList from '@/pages/ChannelList';
import NewChannel from '@/pages/NewChannel';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/reset';
import { theme } from './theme';

function App() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Routes>
          <Route
            path="/"
            element={<ChannelList />}
          />
          <Route
            path="/:id"
            element={<Channel />}
          />
          <Route
            path="/new"
            element={<NewChannel />}
          />
        </Routes>
        <Toaster
          toastOptions={{
            style: { ...toastStyle }
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
