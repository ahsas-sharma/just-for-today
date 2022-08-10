import Head from 'next/head';
import JFT from './jft';
import { Container, Tabs } from '@mantine/core';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Just for Today</title>
        <meta name='description' content='Just for Today' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <JFT />
    </Container>
  );
}
