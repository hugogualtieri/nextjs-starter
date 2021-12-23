import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/SignUp.module.css";

import CustomedHead from "./../components/CustomedHead";
import Layout from "./../components/Layout";
import EaseButton from "./../components/EaseButton";

import { useAuth } from "./../firebase/userContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const { createUserWithEmailAndPassword } = useAuth();

  const handleSignUpButton = () => {
    createUserWithEmailAndPassword(email, firstPassword)
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
        title="Site web | Home"
        description="Bienvenue sur l'accueil de ce siteweb."
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
            onChange={(e) => setFirstPassword(e.target.value)}
          />
          <p>Confirmer votre mot de passer</p>
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="*******"
            name="Password"
            onChange={(e) => setSecondPassword(e.target.value)}
          />
          <div className={styles.buttonWrapper}>
            <EaseButton
              textColor="#ffffff"
              backgroundColor="#ED6C52"
              hoverColor="#ED6C52"
              borderRadius="10px"
              alt="Sign up button"
              onClick={handleSignUpButton}
            >
              Sign up
            </EaseButton>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignUp;
