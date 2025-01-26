import styles from './section_body.module.css'

export default ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.section_container}>{children}</section>
}
