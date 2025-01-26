import Link from 'next/link'
import PostThumbnail from '../ui/post_thumbnail/page'
import styles from './posts_card.module.css'

export default ({
  slug,
  formattedData,
}: {
  slug: string
  formattedData: { title: string; createdAt: string; thumbnail: string }
}) => {
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
  )
}
