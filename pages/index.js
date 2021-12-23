import styles from "../styles/Home.module.css";

import CustomedHead from "./../components/CustomedHead";
import Layout from "./../components/Layout";

export default function Home() {
  return (
    <div>
      <CustomedHead
        title="Site web | Home"
        description="Bienvenue sur l'accueil de ce siteweb."
      />
      <Layout>
        <div className={styles.wrapper}></div>
      </Layout>
    </div>
  );
}
