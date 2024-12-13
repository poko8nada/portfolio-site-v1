import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './posts.module.css';

import { getPosts } from '@/src/lib/post';

export const metadata: Metadata = {
  title: 'blog | Poko Hanada Web',
};
const randomGradient = () => {
  const colors = [
    'linear-gradient(90deg, rgb(226, 207, 255), rgb(251, 253, 191))',
    'linear-gradient(90deg, rgb(115, 248, 224), rgb(150, 167, 241))',
    'linear-gradient(90deg, rgb(253, 146, 146), rgb(209, 254, 212))',
    'linear-gradient(90deg, rgb(0, 255, 243), rgb(252, 146, 146))',
    'linear-gradient(90deg, rgb(168, 202, 240), rgb(233, 240, 250))',
    'linear-gradient(90deg, rgb(229, 162, 255), rgb(152, 233, 157))',
    'linear-gradient(90deg, rgb(89, 173, 241), rgb(207, 253, 157))',
    'linear-gradient(90deg, rgb(210, 190, 153), rgb(194, 255, 233))',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
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
                <div
                  className={styles.img_container}
                  style={{ background: randomGradient() }}
                >
                  <Image
                    src={formattedData.thumbnail}
                    alt={''}
                    style={{ objectFit: 'cover' }}
                    width={60}
                    height={60}
                    sizes="(max-width: 400px)  40px, 60px"
                  />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};
