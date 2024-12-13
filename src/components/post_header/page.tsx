import styles from './post_header.module.css';
import Image from 'next/image';
import type { Post } from '@/src/lib/post';

export default ({ post }: { post?: Post }) => {
  const title = post?.formattedData.title;
  const createdAt = post?.formattedData.createdAt;
  const thumbnail = post?.formattedData.thumbnail;

  return (
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
  );
};
