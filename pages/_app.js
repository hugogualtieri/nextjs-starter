import { AuthUserProvider } from "../firebase/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
