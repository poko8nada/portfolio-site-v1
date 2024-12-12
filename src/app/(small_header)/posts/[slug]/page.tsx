import Image from 'next/image';
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
  const title = post?.formattedData.title;
  const createdAt = post?.formattedData.createdAt;
  const thumbnail = post?.formattedData.thumbnail;

  if (!content || !title || !createdAt) {
    return notFound();
  }
  return (
    <div>
      <div className={styles.article_header}>
        <h2>{title}</h2>
        <div className={styles.img_container}>
          <Image
            src={thumbnail ? thumbnail : '/images/defaultThumbnail.png'}
            alt={''}
            style={{ objectFit: 'cover' }}
            width={80}
            height={80}
            sizes="(max-width: 400px)  60px, 80px"
          />
        </div>
        <p>Created at {createdAt}</p>
      </div>
      <div className={`${styles.article_container} markdown-body`}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
