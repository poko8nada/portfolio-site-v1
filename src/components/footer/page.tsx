import styles from './footer.module.css';
export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear}{' '}
        <a href="/" style={{ color: '#4199ff', textDecoration: 'underline' }}>
          PokoHanadaCom
        </a>
      </p>
    </footer>
  );
};
