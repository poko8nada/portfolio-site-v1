import Header from '@/src/components/header/page';
import Footer from '@/src/components/footer/page';
import Main from '@/src/components/main/page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
