import styles from './main.module.css';

export default (props: { children: React.ReactNode }) => {
  return <main className={styles.main}>{props.children}</main>;
};
