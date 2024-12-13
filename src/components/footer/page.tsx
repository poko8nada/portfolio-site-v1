import styles from './footer.module.css';
export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear}{' '}
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          PokoHanada Web
        </a>
      </p>
    </footer>
  );
};
