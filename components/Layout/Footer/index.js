import styles from "./Footer.module.css";
import utils from "./../../../styles/Utils.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <a href="/" className={styles.title}>
          Example
        </a>
      </div>
      <div className={utils.spacer}></div>
      <div className={styles.sectionWrapper}>
        <p className={styles.sectionTitle}>Section 1</p>
        <a href="/" className={styles.link}>
          Link 1.1
        </a>
        <a href="/" className={styles.link}>
          Link 1.2
        </a>
        <a href="/" className={styles.link}>
          Link 1.3
        </a>
      </div>
      <div className={styles.sectionWrapper}>
        <p className={styles.sectionTitle}>Section 2</p>
        <a href="/" className={styles.link}>
          Link 2.1
        </a>
        <a href="/" className={styles.link}>
          Link 2.2
        </a>
      </div>
    </div>
  );
}
