/** JFT Reference Page
 *
 * @param {String} jftSlug : represents the date of the JFT in DDMMYYYY format
 * @returns : JFT JSON object containing the JFT Markdown text
 *
 * JFT ReferencePage
 */

import { getAllPosts, getPostData, getPostsFiles } from '../lib/posts-util';

import { useRouter } from 'next/router';

export default function JFTReferencePage({ post }) {
  const router = useRouter();
  const { jftSlug } = router.query;

  console.log('Post Data', post);

  return <div>JFT Reference Page: {`${jftSlug} ${post.content}`}</div>;
}

export function getStaticProps(context) {
  const { jftSlug } = context.params;
  const post = getPostData(jftSlug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const allJFTs = getAllPosts();
  const allJFTFiles = getPostsFiles();
  const pathNames = allJFTFiles.map((post) => ({
    params: {
      jftSlug: post.replace(/\.md$/, ''),
    },
  }));
  const paths = allJFTs.map((posts) => ({
    params: {
      jftSlug: posts.slug,
    },
  }));
  return {
    paths: pathNames,
    fallback: false,
  };
}
