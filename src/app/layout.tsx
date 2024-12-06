import type { Metadata } from 'next';
import './globals.css';
import styles from './layout.module.css';
import Header from '@/src/components/header/page';
import Footer from '@/src/components/footer/page';

export const metadata: Metadata = {
  title: 'PokoHanada | blog',
  description:
    'Webアプリケーション開発、フロントエンド開発、ディレクション、マーケティングを得意とするWebエンジニアです。',
  keywords:
    'Webエンジニア, ポートフォリオ, React, Next.js, JavaScript, HTML, CSS',
  openGraph: {
    title: '花田ぽこ | Webエンジニアのポートフォリオ',
    description:
      'Webアプリケーション開発、フロントエンド開発、ディレクション、マーケティングを得意とするWebエンジニアです。',
    // url: 'https://your-domain.com',  // 自分のドメインに置き換えてください
    // images: '/ogp.jpg', // OG画像のパス
  },
  twitter: {
    // card: 'summary_large_image',
    title: 'PokoHanada | blog',
    description:
      'Webアプリケーション開発、フロントエンド開発、ディレクション、マーケティングを得意とするWebエンジニアです。',
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
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
