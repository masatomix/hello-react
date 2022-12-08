import { FC, useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';


type Props = { pageTitle: string };


const Home: FC<Props> = ({ pageTitle }) => {
  const [message, setMessage] = useState('a');

  return (
    <>
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <Input type="text" value={message} w="3xl"
        onChange={(event) => setMessage(_ => event.target.value)} />
      <div>{message}</div>
    </>
  );
};

export default Home;
