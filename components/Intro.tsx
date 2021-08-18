import styles from "./Intro.module.scss";

export default function Intro({ children }: { children?: React.ReactNode }) {
  return <p className={styles.intro}>{children}</p>;
}
