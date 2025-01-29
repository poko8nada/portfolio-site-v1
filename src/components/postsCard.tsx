import Link from 'next/link'
import PostThumbnail from './ui/post_thumbnail/page'

export default ({
  slug,
  formattedData,
  index,
}: {
  slug: string
  formattedData: { title: string; createdAt: string; thumbnail: string }
  index: number
}) => {
  const { title, createdAt, thumbnail } = formattedData
  return (
    <article
      key={slug}
      className='bg-fg flex items-center justify-center rounded-lg first:row-span-2 min-h-28 relative'
    >
      {index === 0 && (
        <div className='absolute inline-flex items-center justify-center p-1 w-8 h-5 md:w-10 text-xs text-white bg-red-500 rounded-md md:rounded-xl md:start-2 md:top-2 top-1 start-1'>
          new
        </div>
      )}
      <Link
        href={`/posts/${slug}`}
        className='flex items-center gap-4 px-5 py-3 h-full hover:scale-105 transition-transform ease-in-out'
      >
        <PostThumbnail thumbnail={thumbnail} width={60} height={60} />
        <div className='text-bg w-full'>
          <p
            className={
              index === 0 ? 'md:text-2xl hover:underline' : 'hover:underline'
            }
          >
            {title}
          </p>
          <small className='ml-1'>{createdAt}</small>
        </div>
      </Link>
    </article>
  )
}
