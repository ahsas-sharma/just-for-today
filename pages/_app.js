import '../styles/globals.css';
import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import SideNav from '../components/UI/Nav/SideNav';
import TopNav from '../components/UI/Nav/TopNav';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Just4Today</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          // TODO: Add the Mantine Theme Overrides here once we figure them out
          colorScheme: "light",
        }}
      >
        <AppShell
          padding="md"
          // navbar={<SideNav width={{ base: 300 }} height={500} p="xs"></SideNav>}
          header={<TopNav height={60} p="xs"></TopNav>}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
