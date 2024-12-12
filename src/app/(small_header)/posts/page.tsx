import Link from 'next/link';
import Image from 'next/image';
import styles from './posts.module.css';

import { getPosts } from '@/src/lib/post';

export default () => {
  const allPosts = getPosts();
  return (
    <>
      <div className={styles.post_header}>
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
                <div className={styles.img_container}>
                  <Image
                    src={formattedData.thumbnail}
                    alt={''}
                    style={{ objectFit: 'cover' }}
                    width={80}
                    height={80}
                    sizes="(max-width: 400px)  60px, 80px"
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
