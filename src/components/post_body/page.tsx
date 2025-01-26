import Markdown from 'react-markdown'
import 'github-markdown-css'
import styles from './post_body.module.css'

import Post_embed from '@/components/ui/post_embed/page'

export default ({ content }: { content: string }) => {
  return (
    <article className={`${styles.article_container} markdown-body`}>
      <Markdown components={{ code: Post_embed }}>{content}</Markdown>
    </article>
  )
}
