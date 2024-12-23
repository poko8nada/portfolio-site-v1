import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

export type Post = {
  slug: string;
  formattedData: {
    title: string;
    createdAt: string;
    updatedAt: string;
    thumbnail: string;
  };
  content: string;
}

export const getAllPosts = () => {
  const postsDir = path.join(process.cwd(), '/src/posts');
  const files = fs.readdirSync(postsDir);
  const posts = files
    .reverse()
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(
        path.join(postsDir, filename),
        'utf-8'
      )
      const { data, content } = matter(markdownWithMeta);

      if (process.env.NODE_ENV === 'development' && data.title === 'blog-format') {
        data.isPublished = true;
      }

      if (!data.isPublished || !data.title || !data.createdAt || !data.updatedAt) {
        return null;
      }

      const formattedData = {
        title: String(data.title),
        createdAt: data.createdAt.toISOString().slice(0, 10) as string,
        updatedAt: data.updatedAt.toISOString().slice(0, 10) as string,
        thumbnail: data.thumbnail ? String(data.thumbnail) : '/images/pencil01.svg'
      };

      return {
        slug,
        formattedData,
        content
      };
    })
    .filter((post) => post !== null);

  return posts;
};

export const getTopPosts = () => {
  const posts = getAllPosts();
  return posts.slice(0, 3);
};