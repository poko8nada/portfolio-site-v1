import Link from 'next/link'
import styles from './button.module.css'

export default ({
  href,
  children,
}: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  )
}
