import './App.css';
import { Global } from '@emotion/react';
import reset from './styles/reset';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import Button from './hooks/Button';
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
        size="xs"
        content={'이전'}
        type={'primary'}
      />
      <Button
        size="xl"
        content={'이전'}
        type={'secondary'}
      />
      <Button
        size="lg"
        content={'이전'}
        type={'assistant'}
      />
      <Button
        size="md"
        content={'이전'}
        type={'outlined'}
      />
      <Button
        size="sm"
        content={'이전'}
        type={'tertiary'}
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
