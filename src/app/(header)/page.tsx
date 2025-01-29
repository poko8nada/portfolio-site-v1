import PostsCard from '@/components/postsCard'
import SectionHeader from '@/components/sectionHeader'
import SectionBody from '@/components/section_body/page'
import Button from '@/components/ui/button'
import { getTopPosts } from '@/lib/post'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  const topPosts = getTopPosts()
  return (
    <>
      <SectionBody>
        <SectionHeader>about</SectionHeader>
        <p className='p-1 mt-2 text-center'>こんにちは。PokoHanadaです。</p>
        <p className='p-1 mt-2 text-center'>
          手を動かすwebディレクターです。
          <br />
          webエンジニア、ディベロッパーでもあります。
        </p>
        <div className='flex flex-row items-center justify-center gap-8 mt-8'>
          <Link
            href='https://x.com/you88451h'
            target='_blank'
            className='hover:scale-125 ease-in-out transition-transform'
          >
            <Image
              src='/images/x-logo.svg'
              alt='xlogo'
              width={26}
              height={26}
            />
          </Link>
          <Link
            href='https://github.com/poko8nada'
            target='_blank'
            className='hover:scale-125 ease-in-out transition-transform'
          >
            <Image
              src='/images/github-mark-white.svg'
              alt='githublogo'
              width={32}
              height={30}
            />
          </Link>
        </div>
      </SectionBody>
      <SectionBody>
        <SectionHeader>recent posts</SectionHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:px-12 p-4'>
          {topPosts.map(({ slug, formattedData }, index) => {
            return (
              <PostsCard
                key={slug}
                slug={slug}
                formattedData={formattedData}
                index={index}
                isHome={true}
              />
            )
          })}
        </div>
        <div className='mt-6'>
          <Button href='/posts'>
            すべての投稿を見る
            <Image
              src={'/images/arrow-next.svg'}
              width={16}
              height={16}
              alt='arrow next'
              className='inline ml-2'
            />
          </Button>
        </div>
      </SectionBody>
      <SectionBody>
        <SectionHeader>tools</SectionHeader>
        <p className='p-1 mt-1 text-center'>準備中…</p>
      </SectionBody>
      <SectionBody>
        <SectionHeader>works</SectionHeader>
        <p className='p-1 mt-1 text-center'>準備中…</p>
      </SectionBody>
    </>
  )
}
