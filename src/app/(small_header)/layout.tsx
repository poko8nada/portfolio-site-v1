import Header from '@/src/components/header/page';
import Main from '@/src/components/main/page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header imgSize={120} fontSize={1.5} />
      <Main>{children}</Main>
    </>
  );
}
