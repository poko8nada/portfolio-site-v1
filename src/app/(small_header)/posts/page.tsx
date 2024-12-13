import type { Metadata } from 'next';
import PostsCard from '@/src/components/posts_card/page';

import { getAllPosts } from '@/src/lib/post';


export const metadata: Metadata = {
  title: 'blog | Poko Hanada Web',
};

export default () => {
  const allPosts = getAllPosts();
  return (
    <>
      <div
        style={{ marginBottom: '24px', textAlign: 'center', padding: '1rem' }}
      >
        <p>webディレクター兼エンジニア兼マーケターの雑記です。</p>
      </div>
      <div>
        {allPosts.map(({ slug, formattedData }) => {
          return (
            <PostsCard key={slug} slug={slug} formattedData={formattedData} />
          );
        })}
      </div>
    </>
  );
};
