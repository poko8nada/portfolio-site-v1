import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/src/components/footer/page';

export const metadata: Metadata = {
  title: 'Poko Hanada Web | freelance Web developer',
  description:
    'webディレクター兼エンジニア兼マーケターです。webディベロッパーでもあります。Webアプリケーション開発、フロントエンド開発が得意です。',
  keywords:
    'Webエンジニア, Web開発, フロントエンド, Webアプリケーション, ポートフォリオ, React, Next.js, TypeScript, JavaScript, HTML, CSS',
  openGraph: {
    title: 'Poko Hanada Web | freelance Web developer',
    description:
      'webディレクター兼エンジニア兼マーケターです。webディベロッパーでもあります。Webアプリケーション開発、フロントエンド開発が得意です。',
    // url: 'https://your-domain.com',  // 自分のドメインに置き換えてください
    // images: '/ogp.jpg', // OG画像のパス
  },
  twitter: {
    // card: 'summary_large_image',
    title: 'Poko Hanada Web | freelance Web developer',
    description:
      'webディレクター兼エンジニア兼マーケターです。webディベロッパーでもあります。Webアプリケーション開発、フロントエンド開発が得意です。',
    // images: '/ogp.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
