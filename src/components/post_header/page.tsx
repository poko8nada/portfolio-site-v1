import PostThumbnail from '@/components/ui/post_thumbnail/page'
import type { Post } from '@/lib/post'
import styles from './post_header.module.css'

export default ({ post }: { post?: Post }) => {
  const title = post?.formattedData.title
  const createdAt = post?.formattedData.createdAt
  const updatedAt = post?.formattedData.updatedAt
  const thumbnail = post?.formattedData.thumbnail

  return (
    <div className={styles.article_header}>
      <h2>{title}</h2>
      <PostThumbnail thumbnail={thumbnail} size={70} />
      <p>
        <span>{createdAt}</span>
        {updatedAt === createdAt ? null : <span>{updatedAt}</span>}
      </p>
    </div>
  )
}
