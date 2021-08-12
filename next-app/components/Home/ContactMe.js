import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Center,
  Heading,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useStateContext } from '../../utils/provider';
import { SET_PAGE } from '../../utils/actions';

export default function About() {
  const [{ page }, dispatch] = useStateContext();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <Stack w={400}>
        <Center>
          <Heading size="xl" fontWeight="bold">
            Let's get in touch!
          </Heading>
        </Center>
        <br />
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="subject" isRequired>
          <FormLabel>Subject</FormLabel>
          <Input onChange={(e) => setSubject(e.target.value)} />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <br />

        <Button
          mt={4}
          style={{ background: '#FBD802' }}
          color="dark"
          type="submit"
        >
          <a
            href={`mailto:zwemsoe@gmail.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(message)}`}
          >
            Send Message
          </a>
        </Button>
        <br />
        <Center>
          <IconButton
            colorScheme="none"
            aria-label="scroll-to-top"
            w={10}
            h={10}
            icon={<Icon as={FaArrowCircleUp} w={10} h={10} color="white" />}
            onClick={() =>
              dispatch({
                type: SET_PAGE,
                page: 0,
              })
            }
          />
        </Center>
      </Stack>
    </>
  );
}