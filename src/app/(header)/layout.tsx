import Header from '@/components/header/page'
import Main from '@/components/main/page'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}
