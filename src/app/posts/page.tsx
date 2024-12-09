import Link from 'next/link';
import Image from 'next/image';
import styles from './posts.module.css';
import PostStyles from './post.module.css';

import { getPosts } from '@/src/lib/post';
const allPosts = getPosts();
console.log(allPosts);
export default () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <p>webディレクター兼エンジニア兼マーケターの雑記です。</p>
      </div>
      <div className={styles.container}>
        {allPosts
          .filter((post) => post !== null)
          .map((post) => {
            const data = post.formattedData;
            return (
              <article key={post.slug} className={PostStyles.post_container}>
                <Link href={`/posts/${post.slug}`} className={PostStyles.post}>
                  <div className={PostStyles.text}>
                    <p>{data.title}</p>
                    <small>{data.createdAt}</small>
                  </div>
                  <Image
                    src={data.thumbnail}
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
