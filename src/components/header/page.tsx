import styles from './header.module.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default () => {
  return (
    <header className={`${styles.header} ${nunito.className}`}>
      <div className={styles.header_logo}>
        <img src="/images/profile01.jpeg" alt="" width="180px" height="auto" />
        <h1>PokoHanadaWeb</h1>
      </div>
    </header>
  );
};
