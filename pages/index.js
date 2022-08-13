import Head from 'next/head';
import JFT from './jft';
import { getPostData } from "../lib/posts-util";
import { Container, Tabs } from '@mantine/core';
import JFTPost from "../components/JFT/JFTPost";

export default function Home({ post }) {
  console.log("Home Page Post: ", post);
  return (
    <Container>
      <Head>
        <title>Just for Today</title>
        <meta name="description" content="Just for Today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JFTPost post={post} />
      <JFT />
    </Container>
  );
}

export function getStaticProps(context) {
  const dateToday = (new Date().getDate() + 100).toString().slice(1); // Added 100 to ensure 2 digit dates
  const monthToday = (new Date().getMonth() + 101).toString().slice(1); // Added 100 to ensure 2 digit month. Plus 1 because month start with 0 January 1 Februdary ... 11 December
  const todaySlug = `${dateToday}${monthToday}`;
  const post = getPostData(todaySlug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}