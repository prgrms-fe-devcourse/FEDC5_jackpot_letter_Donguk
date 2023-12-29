import './App.css';
import { Global } from '@emotion/react';
import reset from './styles/reset';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import Button from './components/Common/Button';
function App() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };
  return (
    <>
      <Global styles={reset} />

      <h1 onClick={() => toast.success('성공했당')}>success case</h1>
      <h1 onClick={() => toast.error('실패했당')}>error case</h1>

      <Button
        size="md"
        content={'disabled, xs, primary'}
        onClick={() => toast.success('zmzm')}
        kind={'primary'}
      />
      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </>
  );
}

export default App;
