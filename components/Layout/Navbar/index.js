import styles from "./Navbar.module.css";
import utils from "./../../../styles/Utils.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <a className={styles.title} href="/">
        Site web
      </a>
      <div className={utils.spacer}></div>
      <a className={styles.link} href="/link-1">
        Link 1
      </a>
      <a className={styles.link} href="/link-2">
        Link 2
      </a>
      <a className={styles.link} href="/link-3">
        Link 3
      </a>
      <a className={styles.link} href="/link-3">
        Link 4
      </a>
    </div>
  );
}
