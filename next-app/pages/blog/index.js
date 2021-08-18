import Head from 'next/head';
import styles from '@/styles/Blogs.module.scss';
import { Heading, Box, Center } from '@chakra-ui/react';

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Zwe Min Soe's Blog" />
      </Head>
      <Box>
        <Center>
          <Heading size="xl" fontWeight="normal" color="white">
            Working on it...
          </Heading>
        </Center>
        <br />
        <iframe
          src="https://giphy.com/embed/pOZhmE42D1WrCWATLK"
          width="300"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </div>
  );
}
