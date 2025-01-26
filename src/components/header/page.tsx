import { Nunito } from 'next/font/google'
import Image from 'next/image'
import styles from './header.module.css'

const nunito = Nunito({ subsets: ['latin'] })

export default ({
  imgSize = 140,
  fontSize = 1.5,
}: { imgSize?: number; fontSize?: number }) => {
  return (
    <header className={`${styles.header} ${nunito.className}`}>
      <div className={styles.header_logo}>
        <Image
          src='/images/profile01.png'
          width={imgSize}
          height={imgSize}
          alt=''
          priority
          placeholder='empty'
        />
        <h1 style={{ fontSize: `${fontSize}rem` }}>PokoHanadaCom</h1>
      </div>
    </header>
  )
}
