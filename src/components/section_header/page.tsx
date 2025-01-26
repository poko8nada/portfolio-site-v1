import { Nunito } from 'next/font/google'
import styles from './section_header.module.css'

const nunito = Nunito({ subsets: ['latin'] })

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.header_container} ${nunito.className}`}>
      <h2>{children}</h2>
    </div>
  )
}
