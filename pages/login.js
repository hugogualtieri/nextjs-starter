import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./../styles/Login.module.css";

import CustomedHead from "./../components/CustomedHead";
import Layout from "./../components/Layout";
import EaseButton from "./../components/EaseButton";

import { useAuth } from "../firebase/userContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const { signInWithEmailAndPassword } = useAuth();

  const handleLogInButton = () => {
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("Success. The user is created in Firebase");
        router.push("/dashboard");
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        console.log(error.message);
        //setError(error.message);
      });
  };

  return (
    <div>
      <CustomedHead
        title="Site web | Login"
        description="Bienvenue sur la page de connexion de ce siteweb."
      />
      <Layout>
        <div className={styles.wrapper}>
          <p>Email</p>
          <input
            className={styles.input}
            id="email"
            type="email"
            placeholder="Ex: example@gmail.com"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="*******"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.buttonWrapper}>
            <EaseButton
              textColor="#ffffff"
              backgroundColor="#ED6C52"
              hoverColor="#ED6C52"
              borderRadius="10px"
              alt="Log in button"
              onClick={handleLogInButton}
            >
              Log in
            </EaseButton>
          </div>
        </div>
      </Layout>
    </div>
  );
}
