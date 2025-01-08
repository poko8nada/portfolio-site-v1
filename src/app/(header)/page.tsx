import PostsCard from '@/src/components/posts_card/page';
import SectionBody from '@/src/components/section_body/page';
import SectionHeader from '@/src/components/section_header/page';
import Button from '@/src/components/ui/button/page';
import { getTopPosts } from '@/src/lib/post';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  const topPosts = getTopPosts();
  return (
    <>
      <SectionBody>
        <SectionHeader>about</SectionHeader>
        <p style={{ padding: '.5rem  1rem', textAlign: 'center' }}>
          webディレクター兼エンジニア兼マーケターです。
          <br />
          webディベロッパーでもあります。
        </p>
        <div style={{ display: 'flex', gap: '1em' }}>
          <Link
            style={{
              borderRadius: '18%',
              overflow: 'hidden',
              padding: '.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            href="https://x.com/you88451h"
            target="_blank"
          >
            <Image
              style={{ display: 'block' }}
              src="/images/x-logo.svg"
              alt=""
              width={25}
              height={25}
            />
          </Link>
          <Link
            style={{
              borderRadius: '18%',
              overflow: 'hidden',
              padding: '.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            href="https://github.com/poko8nada"
            target="_blank"
          >
            <Image
              style={{ display: 'block' }}
              src="/images/github-mark-white.svg"
              alt=""
              width={31}
              height={30}
            />
          </Link>
        </div>
      </SectionBody>
      <SectionBody>
        <SectionHeader>recent posts</SectionHeader>
        {topPosts.length === 0 ? (
          <p style={{ padding: '1rem' }}>Under construction ...</p>
        ) : (
          topPosts.map(({ slug, formattedData }) => {
            return (
              <PostsCard key={slug} slug={slug} formattedData={formattedData} />
            );
          })
        )}
        {/* <div style={{ marginTop: '2rem' }}>
            <Button href="/posts">read more</Button>
          </div> */}
      </SectionBody>
      <SectionBody>
        <SectionHeader>works</SectionHeader>
        <p style={{ padding: '1rem' }}>Under construction ...</p>
      </SectionBody>
    </>
  );
}
