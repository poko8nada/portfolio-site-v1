import type { Post } from '@/src/lib/post';
import Link from 'next/link';
import styles from './post_footer.module.css';
export default ({
  prevPost,
  nextPost,
}: { prevPost?: Post; nextPost?: Post }) => {
  const prevPostTitle = prevPost?.formattedData.title;
  const nextPostTitle = nextPost?.formattedData.title;
  const prevPostSlug = prevPost?.slug;
  const nextPostSlug = nextPost?.slug;
  return (
    <div className={styles.article_footer}>
      {/* <div> */}
      {prevPostSlug && (
        <Link href={`/posts/${prevPostSlug}`} className={styles.prev}>
          {prevPostTitle}
        </Link>
      )}
      {/* </div>
      <div> */}
      {nextPostSlug && (
        <Link href={`/posts/${nextPostSlug}`} className={styles.next}>
          {nextPostTitle}
        </Link>
      )}
      {/* </div> */}
    </div>
  );
};
