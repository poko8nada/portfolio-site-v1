import Link from 'next/link';
import Image from 'next/image';
import styles from './posts.module.css';

import { getPosts } from '@/src/lib/post';

export default () => {
  const allPosts = getPosts();
  return (
    <>
      <div style={{ textAlign: 'center' }}>
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
                <Image
                  src={formattedData.thumbnail}
                  alt={''}
                  style={{ objectFit: 'cover' }}
                  width={160}
                  height={160}
                  layout="intrinsic"
                  sizes="(max-width: 400px)  160px, 200px"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};
