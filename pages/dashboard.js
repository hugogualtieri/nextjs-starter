import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./../styles/Dashboard.module.css";

import CustomedHead from "./../components/CustomedHead";
import Layout from "./../components/Layout";
import EaseButton from "./../components/EaseButton";

import { useAuth } from "../firebase/userContext";

const Dashboard = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

  const handleLogOutButton = () => {
    signOut();
  };

  return (
    <div>
      <CustomedHead
        title="Site web | Home"
        description="Bienvenue sur l'accueil de ce siteweb."
      />
      <Layout>
        <div className={styles.wrapper}>
          <p>Hey @...</p>
          <div className={styles.buttonWrapper}>
            <EaseButton
              textColor="#ffffff"
              backgroundColor="#ED6C52"
              hoverColor="#ED6C52"
              borderRadius="10px"
              alt="Log out button"
              onClick={handleLogOutButton}
            >
              Log out
            </EaseButton>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
