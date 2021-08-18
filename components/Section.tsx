import styles from './Section.module.scss'

export default function Section({ children }: { children: React.ReactNode}) {
  return <section className={styles.wrapper}>{children}</section>
}

