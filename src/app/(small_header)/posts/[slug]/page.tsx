import PostHeader from '@/src/components/post_header/page';
import PostFooter from '@/src/components/post_footer/page';
import PostBody from '@/src/components/post_body/page';
import { getPosts, type Post } from '@/src/lib/post';
import { notFound } from 'next/navigation';

const allPosts: Post[] = getPosts();

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    title: `${post?.formattedData.title} | poko hanada web`,
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
      <PostHeader post={post} />
      <PostBody content={content} />
      <PostFooter prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}
