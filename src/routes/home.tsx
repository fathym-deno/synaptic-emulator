import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to the Synaptic Emulator</h1>
        <p className="text-lg mt-4">
          This is an emulator for bots built with the Synaptic bot framework.
        </p>
      </div>

      <Button as={Link} to="/about" className="max-w-screen-sm mx-auto mt-8 " gradientDuoTone="purpleToBlue">
        Get Started Testing your Bot Now
      </Button>

      <Card className="text-white my-10 mx-auto w-3/4">
        <h2 className="text-2xl font-bold">About Synaptic</h2>
        <p className="text-lg mt-4">
          Synaptic is a revolutionary bot building framework that goes beyond
          mere conversation. Our goal is to create bots that don't just talk,
          but actually do something meaningful.
        </p>
        <p className="text-lg mt-4">
          Just like the human brain, a bot at its simplest can communicate.
          However, the true power of the brain lies in the synapses, the
          connections that link brain activity with the rest of the body,
          enabling us to perform a multitude of tasks. Similarly, by adding
          additional functionality to our bots, we can connect these 'synapses'
          to real, tangible work.
        </p>
        <p className="text-lg mt-4">
          Synaptic is designed with this philosophy in mind. It provides a
          robust and flexible framework for building bots that can interact,
          learn, and perform tasks, just like a human would. With Synaptic, you
          can create bots that not only understand and respond to commands, but
          also carry out complex tasks, automate processes, and interact with
          various systems and databases.
        </p>
        <p className="text-lg mt-4">
          The possibilities are endless. Whether you're looking to automate
          customer service, streamline business processes, or create a virtual
          assistant, Synaptic provides the tools and infrastructure you need to
          bring your ideas to life.
        </p>
        <p className="text-lg mt-4">
          Join us in redefining what bots can do. Welcome to the future of bot
          building with Synaptic.
        </p>
      </Card>
    </>
  );
}
