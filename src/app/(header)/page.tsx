import Link from 'next/link';
import { getTopPosts } from '@/src/lib/post';
import PostsCard from '@/src/components/posts_card/page';
import SectionBody from '@/src/components/section_body/page';
import SectionHeader from '@/src/components/section_header/page';
import Button from '@/src/components/ui/button/page';
import Image from 'next/image';
export default function Home() {
  const topPosts = getTopPosts();
  return (
    <>
      <SectionBody>
        <SectionHeader>about</SectionHeader>
        <p>webディレクター兼エンジニア兼マーケターです。</p>
        <div style={{ display: 'flex', gap: '1.25em', marginTop: '1rem' }}>
          <Link
            style={{
              borderRadius: '22%',
              overflow: 'hidden',
              padding: '.7rem',
              background: '#1b2da3',
            }}
            href="https://x.com/you88451h"
            target="_blank"
          >
            <Image src="/images/x-logo.svg" alt="" width={30} height={30} />
          </Link>
          <Link
            style={{
              borderRadius: '22%',
              overflow: 'hidden',
              padding: '.7rem',
              background: '#1b2da3',
            }}
            href="https://github.com/poko8nada"
            target="_blank"
          >
            <Image
              src="/images/github-mark-white.svg"
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </div>
      </SectionBody>
      <SectionBody>
        <SectionHeader>recent posts</SectionHeader>
        {topPosts.map(({ slug, formattedData }) => {
          return (
            <PostsCard key={slug} slug={slug} formattedData={formattedData} />
          );
        })}
        <div style={{ marginTop: '2rem' }}>
          <Button href="/posts">read more</Button>
        </div>
      </SectionBody>
      <SectionBody>
        <SectionHeader>works</SectionHeader>
        <p style={{ padding: '1rem' }}>Under construction ...</p>
      </SectionBody>
    </>
  );
}
