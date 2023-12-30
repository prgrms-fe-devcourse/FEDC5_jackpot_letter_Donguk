import { Toaster } from 'react-hot-toast';
import { Global, ThemeProvider } from '@emotion/react';
import ChannelList from './pages/ChannelList';
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
        <ChannelList />

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
