import SmallHeader from '@/src/components/small_header/page';
import Footer from '@/src/components/footer/page';
import Main from '@/src/components/main/page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmallHeader />
      <Main>{children}</Main>
    </>
  );
}
