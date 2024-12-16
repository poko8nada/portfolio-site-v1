import PostHeader from '@/src/components/post_header/page';
import PostFooter from '@/src/components/post_footer/page';
import PostBody from '@/src/components/post_body/page';

import { getAllPosts, type Post } from '@/src/lib/post';
import { notFound } from 'next/navigation';
import SectionBody from '@/src/components/section_body/page';

const allPosts: Post[] = getAllPosts();

export const generateMetadata = async ({
  params,
}: { params: { slug: string } }) => {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post.slug === slug);
  return {
    title: `${post?.formattedData.title} | pokoHanadaCom`,
    canonical: `https://example.com/posts/${slug}`, // 自分のドメインに置き換えてください
    openGraph: {
      title: `${post?.formattedData.title} | pokoHanadaCom`,
      description: post?.formattedData.title,
      type: 'article',
      url: `https://example.com/posts/${slug}`, // 自分のドメインに置き換えてください
      images: '/images/profile01.png',
    },
    twitter: {
      card: 'summary',
      title: `${post?.formattedData.title} | pokoHanadaCom`,
      description: post?.formattedData.title,
    },
  };
};

export const generateStaticParams = () => {
  return allPosts.map(({ slug }) => {
    return { slug };
  });
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post.slug === slug);
  const content = post?.content;

  if (!content) {
    return notFound();
  }

  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return (
    <>
      <SectionBody>
        <PostHeader post={post} />
        <PostBody content={content} />
        <PostFooter prevPost={prevPost} nextPost={nextPost} />
      </SectionBody>
    </>
  );
}
