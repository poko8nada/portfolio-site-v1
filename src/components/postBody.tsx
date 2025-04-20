import Post_embed from '@/components/ui/postEmbed'
import Markdown from 'markdown-to-jsx'

export default ({ content }: { content: string }) => {
  return (
    <article className='markdown-body article_container rounded-lg py-20 md:px-12 w-full'>
      <Markdown
        options={{
          overrides: {
            code: Post_embed,
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  )
}
