import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const sortedPosts = getPostsFiles()
    .map((file) => {
      return getPostData(file);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

export function getPostBySlug(slug) {
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === slug);
  return post;
}
