import type { NextPage } from "next";
import styles from "../../components/Button.module.scss";
import otherStyles from "../../components/OtherButton.module.css";
import { useTheme } from "next-themes";
import Intro from "../../components/Intro";
import IntroLink from "../../components/IntroLink";
import Section from "../../components/Section";

const Index: NextPage = () => {
  const { setTheme } = useTheme();

  return (
    <Section>
      <h2>Styles</h2>
      <Intro>
        NextJS comes with Built-In CSS support for global and moduled CSS. With
        minor config, it can support Sass, themes and most CSS-in-JS libraries.
        <IntroLink
          href={"https://nextjs.org/docs/basic-features/built-in-css-support"}
        />
      </Intro>
      <p>This is just a regular button</p>
      <button>Regular button</button>

      <p>Styles can be appended using the regular react style property...</p>
      <button style={{ backgroundColor: "hotpink" }}>Inline styling</button>

      <p>...or via use of global css class names...</p>
      <button className={"error"}>Global error styling</button>

      <p>...or with css modules, which prevents any class name crashes</p>
      <button className={styles.error}>Moduled error button</button>
      <button className={otherStyles.error}>
        .error class from other module
      </button>

      <h3>SCSS</h3>
      <p>
        To add scss, rename the files .scss and run{" "}
        <strong>yarn add scss</strong>
      </p>
      <button className={styles.error}>
        <span className={styles.highlightedText}>Highlighted error button</span>
      </button>

      <h3>Theming</h3>
      <p>
        To add theme support, run <strong>yarn add next-theme</strong> and add a
        provider to the _app.tsx file.
      </p>
      <p>
        These buttons change color based on css variables defined in the global
        css.
      </p>

      <button className={styles.regular} onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className={styles.inverted} onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
      <hr />
      <button className={styles.primary}>Themed button</button>
    </Section>
  );
};

export default Index;
