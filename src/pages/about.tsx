import { Button, Card } from 'flowbite-react';
import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React About</h1>
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
