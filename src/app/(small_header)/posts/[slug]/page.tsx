import PostHeader from '@/src/components/post_header/page';
import PostFooter from '@/src/components/post_footer/page';
import { getPosts, type Post } from '@/src/lib/post';
import Markdown from 'react-markdown';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import 'github-markdown-css';

const allPosts: Post[] = getPosts();

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    title: `${post?.formattedData.title} | poko hanada web`,
  };
};

export const generateStaticParams = () => {
  return allPosts.map(({ slug }) => {
    return { slug };
  });
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post.slug === slug);
  const content = post?.content;

  if (!content) {
    return notFound();
  }

  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return (
    <>
      <PostHeader post={post} />
      <article className={`${styles.article_container} markdown-body`}>
        <Markdown>{content}</Markdown>
      </article>
      <PostFooter prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}
