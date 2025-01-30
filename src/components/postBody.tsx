import Markdown from 'react-markdown'
import 'github-markdown-css'
import remarkGfm from 'remark-gfm'

import Post_embed from '@/components/ui/postEmbed'

export default ({ content }: { content: string }) => {
  return (
    <article className='markdown-body article_container rounded-lg py-20 md:px-12 w-full'>
      <Markdown components={{ code: Post_embed }} remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </article>
  )
}
