import PostHeader from '@/src/components/post_header/page';
import PostFooter from '@/src/components/post_footer/page';
import PostBody from '@/src/components/post_body/page';

import { getAllPosts, type Post } from '@/src/lib/post';
import { notFound } from 'next/navigation';
import SectionBody from '@/src/components/section_body/page';

const allPosts: Post[] = getAllPosts();

export function generateStaticParams() {
  return allPosts.map(({ slug }) => {
    return { slug };
  });
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const post = allPosts.find((post) => post.slug === slug);
  return {
    title: `${post?.formattedData.title} | pokoHanadaCom`,
    canonical: `https://pokohanada.com/posts/${slug}`,
    openGraph: {
      title: `${post?.formattedData.title} | pokoHanadaCom`,
      description: post?.formattedData.title,
      type: 'article',
      url: `https://pokohanada.com/posts/${slug}`,
      images: 'https://pokohanada.com/images/profile01.png',
    },
    twitter: {
      card: 'summary',
      title: `${post?.formattedData.title} | pokoHanadaCom`,
      description: post?.formattedData.title,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post.slug === slug);
  const content: string | undefined = post?.content;

  if (!post) {
    console.log(`${slug} ${content}`);
    return notFound();
  }

  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return (
    <>
      <SectionBody>
        <PostHeader post={post} />
        <PostBody content={content as string} />
        {allPosts.length <= 1 ? null : (
          <PostFooter prevPost={prevPost} nextPost={nextPost} />
        )}
      </SectionBody>
    </>
  );
}
