import { Card } from 'flowbite-react';

export default function Home() {
  return (
    <>
      <h1>Welcome to the Synaptic Emulator</h1>
      <Card>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          This is an emulator for bots built with the Synaptic bot framework.
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
