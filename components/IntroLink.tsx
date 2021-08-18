import styles from "./Intro.module.scss";
import Link from "next/link";

export default function IntroLink({
  href,
}: {
  href: string;
}) {
  return (
    <Link href={href} passHref={true}>
      <a className={styles.link}>{href}</a>
    </Link>
  );
}
