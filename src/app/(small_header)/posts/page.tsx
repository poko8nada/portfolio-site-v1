import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './posts.module.css';
import PostThumbnail from '@/src/components/ui/post_thumbnail/page';

import { getPosts } from '@/src/lib/post';

export const metadata: Metadata = {
  title: 'blog | Poko Hanada Web',
};

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default () => {
  const allPosts = getPosts();
  return (
    <>
      <div
        style={{ marginBottom: '24px', textAlign: 'center', padding: '1rem' }}
      >
        <p>webディレクター兼エンジニア兼マーケターの雑記です。</p>
      </div>
      <div>
        {allPosts.map(({ slug, formattedData }) => {
          return (
            <article key={slug} className={styles.post_container}>
              <Link href={`/posts/${slug}`} className={styles.post}>
                <div className={styles.text}>
                  <p>{formattedData.title}</p>
                  <small>{formattedData.createdAt}</small>
                </div>
                <PostThumbnail thumbnail={formattedData.thumbnail} size={50} />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};
