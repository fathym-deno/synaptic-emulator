import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Button>
        <Button href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Button>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <Button pill onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
