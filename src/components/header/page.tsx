import styles from './header.module.css';
import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default ({ imgSize = 150, fontSize = 1.7 }: { imgSize?: number, fontSize?: number }) => {
  return (
    <header className={`${styles.header} ${nunito.className}`}>
      <div className={styles.header_logo}>
        <Image src="/images/profile01.jpeg" width={imgSize} height={imgSize} alt="" />
        <h1 style={{ fontSize: `${fontSize}rem` }}>PokoHanadaCom</h1>
      </div>
    </header>
  );
};
