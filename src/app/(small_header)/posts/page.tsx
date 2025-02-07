import PostsCard from '@/components/postsCard'
import SectionBody from '@/components/sectionBody'
import type { Metadata } from 'next'

import { getAllPosts } from '@/lib/post'

export const metadata: Metadata = {
  title: 'blog | pokoHanadaCom',
}

export default () => {
  const allPosts = getAllPosts()
  return (
    <>
      <SectionBody>
        <div
          style={{ marginBottom: '24px', textAlign: 'center', padding: '1rem' }}
        >
          <p>手を動かすwebディレクターの雑記です。</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9 md:px-28 px-12 p-4'>
          {allPosts.map(({ slug, formattedData }, index) => {
            return (
              <PostsCard
                key={slug}
                slug={slug}
                index={index}
                formattedData={formattedData}
              />
            )
          })}
        </div>
      </SectionBody>
    </>
  )
}
