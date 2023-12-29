import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import reactLogo from '@/assets/react.svg';
import reset from '@/styles/reset';
import { Global } from '@emotion/react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };
  return (
    <>
      <Global styles={reset} />
      <div>
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </div>
      <h1 onClick={() => toast.success('성공했당')}>success case</h1>
      <h1 onClick={() => toast.error('실패했당')}>error case</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </>
  );
}

export default App;
