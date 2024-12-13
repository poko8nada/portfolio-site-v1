import Link from 'next/link';
import { getTopPosts } from '@/src/lib/post';
import PostsCard from '@/src/components/posts_card/page';
import SectionBody from '@/src/components/section_body/page';
import SectionHeader from '@/src/components/section_header/page';
import Button from '@/src/components/ui/button/page';
export default function Home() {
  const topPosts = getTopPosts();
  return (
    <>
      <SectionBody>
        <SectionHeader>about</SectionHeader>
      </SectionBody >
      <SectionBody>
        <SectionHeader>recent posts</SectionHeader>
        {
          topPosts.map(({ slug, formattedData }) => {
            return (
              <PostsCard key={slug} slug={slug} formattedData={formattedData} />
            )
          })
        }
        <div style={{ marginTop: '2rem' }}>
          <Button href="/posts" >read more</Button>
        </div>
      </SectionBody >
      <SectionBody>
        <SectionHeader>works</SectionHeader>
        <p style={{ padding: '1rem' }}>Under construction ...</p>
      </SectionBody >
    </>
  );
}
