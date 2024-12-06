import styles from './footer.module.css';
export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} PokoHanada</p>
    </footer>
  );
};
