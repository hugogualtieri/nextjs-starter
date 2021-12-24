import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./../styles/Dashboard.module.css";
import utils from "./../styles/Utils.module.css";

import CustomedHead from "./../components/CustomedHead";
import Layout from "./../components/Layout";
import EaseButton from "./../components/EaseButton";

import { useAuth } from "../firebase/userContext";

import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "./../firebase/init";
import votesService from "./../firebase/firestore/votes";

const Dashboard = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading, router]);

  const handleLogOutButton = () => {
    signOut();
  };

  const handleNoVoteButton = () => {
    votesService.setVote(false, authUser.uid);
  };

  const handleYesVoteButton = () => {
    votesService.setVote(true, authUser.uid);
  };

  const [votes, votesLoading, votesError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );

  if (!votesLoading && votes) {
    console.log(
      "votesService.getVoteById: ",
      votesService.getVoteById(votes.docs, authUser.uid)
    );
  }

  const getVotesPercentage = (vote) => {
    var noVotes = 0;

    if (!votes) {
      return "Loading...";
    }
    votes.docs.map((doc) => {
      if (doc.data().vote === vote) {
        noVotes += 1;
      }
    });
    return String((noVotes / votes.docs.length) * 100) + "%";
  };

  return authUser ? (
    <div>
      <CustomedHead
        title="Site web | Dashboard"
        description="Bienvenue sur le dashboard de ce siteweb."
      />
      <Layout>
        <div className={styles.wrapper}>
          <p>Hey {authUser.email}</p>
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
          <div>
            <p>Est-ce que ce template est cool ?</p>
            <div className={utils.rowWrapper}>
              <div>
                <p>{getVotesPercentage(false)}</p>
                <p>Non</p>
              </div>
              <div>
                <p>{getVotesPercentage(true)}</p>
                <p>Oui</p>
              </div>
            </div>
            <div className={utils.rowWrapper}>
              <div className={styles.buttonWrapper}>
                <EaseButton
                  textColor="#ffffff"
                  backgroundColor="#ED6C52"
                  hoverColor="#ED6C52"
                  borderRadius="10px"
                  alt="Vote no button"
                  onClick={handleNoVoteButton}
                >
                  No
                </EaseButton>
              </div>
              <div className={styles.buttonWrapper}>
                <EaseButton
                  textColor="#ffffff"
                  backgroundColor="#ED6C52"
                  hoverColor="#ED6C52"
                  borderRadius="10px"
                  alt="Vote yes button"
                  onClick={handleYesVoteButton}
                >
                  Yes
                </EaseButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  ) : null;
};

export default Dashboard;
