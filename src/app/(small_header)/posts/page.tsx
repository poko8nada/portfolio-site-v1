import type { Metadata } from 'next';
import PostsCard from '@/src/components/posts_card/page';
import SectionBody from '@/src/components/section_body/page';

import { getAllPosts } from '@/src/lib/post';

export const metadata: Metadata = {
  title: 'blog | pokoHanadaCom',
};

export default () => {
  const allPosts = getAllPosts();
  return (
    <>
      <SectionBody>
        <div
          style={{ marginBottom: '24px', textAlign: 'center', padding: '1rem' }}
        >
          <p>webディレクター兼エンジニア兼マーケターの雑記です。</p>
        </div>
        {allPosts.length === 0 ? (
          <p style={{ padding: '1rem' }}>Under construction ...</p>
        ) : (
          allPosts.map(({ slug, formattedData }) => {
            return (
              <PostsCard key={slug} slug={slug} formattedData={formattedData} />
            );
          })
        )}
      </SectionBody>
    </>
  );
};
