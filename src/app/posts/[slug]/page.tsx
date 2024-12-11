import { getPosts, type Post } from '@/src/lib/post';
import Markdown from 'react-markdown';
import style from './page.module.css';
import { notFound } from 'next/navigation';

const allPosts: Post[] = getPosts();
// console.log(allPosts);
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
  console.log(slug);
  const content = allPosts.find((post) => post.slug === slug)?.content;
  if (!content) {
    return notFound();
  }
  return (
    <div className={style.article_container}>
      <div>ttttt</div>
      <Markdown>{content}</Markdown>
    </div>
  );
}
