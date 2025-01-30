import Link from 'next/link'
import PostThumbnail from './ui/postThumbnail'

export default ({
  slug,
  formattedData,
  index,
  isHome,
}: {
  slug: string
  formattedData: { title: string; createdAt: string; thumbnail: string }
  index: number
  isHome?: boolean
}) => {
  const { title, createdAt, thumbnail } = formattedData
  const articleClass =
    'bg-fg flex items-center justify-center rounded-lg min-h-28 relative'
  const linkClass =
    'flex w-full items-center justify-start gap-4 px-5 h-full hover:scale-105 transition-transform ease-in-out'
  const textClass = 'text-bg w-full flex flex-col h-full'
  return (
    <article
      key={slug}
      className={
        index === 0 && isHome
          ? `first:row-span-2 ${articleClass}`
          : `${articleClass}`
      }
    >
      {index === 0 && (
        <div className='absolute inline-flex items-center justify-center p-1 w-8 h-5 md:w-10 text-xs text-white bg-red-500 rounded-md md:rounded-xl md:start-2 md:top-2 top-1 start-1'>
          new
        </div>
      )}
      <Link
        href={`/posts/${slug}`}
        className={!isHome ? `flex-col py-5 ${linkClass}` : `py-3 ${linkClass}`}
      >
        <PostThumbnail thumbnail={thumbnail} width={60} height={60} />
        <div
          className={
            isHome
              ? `justify-center ${textClass}`
              : `justify-between ${textClass}`
          }
        >
          <p
            className={
              index === 0 && isHome
                ? 'md:text-2xl hover:underline'
                : 'hover:underline'
            }
          >
            {title}
          </p>
          <small className={!isHome ? 'ml-auto' : ''}>{createdAt}</small>
        </div>
      </Link>
    </article>
  )
}
