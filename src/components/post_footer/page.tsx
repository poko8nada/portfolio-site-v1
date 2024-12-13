import styles from './post_footer.module.css';
import Link from 'next/link';
import type { Post } from '@/src/lib/post';
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
      <div>
        {prevPostSlug && (
          <Link href={`/posts/${prevPostSlug}`} className={styles.prev}>
            <span>{prevPostTitle}</span>
          </Link>
        )}
      </div>
      <div>
        {nextPostSlug && (
          <Link href={`/posts/${nextPostSlug}`} className={styles.next}>
            <span>{nextPostTitle}</span>
          </Link>
        )}
      </div>
    </div>
  );
};
