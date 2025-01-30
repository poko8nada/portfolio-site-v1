import Markdown from 'react-markdown'
import 'github-markdown-css'

import Post_embed from '@/components/ui/postEmbed'

export default ({ content }: { content: string }) => {
  return (
    <article className='markdown-body article_container rounded-lg py-20 px-5 md:px-12 w-full'>
      <Markdown components={{ code: Post_embed }}>{content}</Markdown>
    </article>
  )
}
