import firebase from "./../init";

const db = firebase.firestore();

async function setVote(vote, userId) {
  await db.collection("votes").doc(userId).set({
    vote: vote,
  });
}

function getVoteById(votes, id) {
  var i = 0;

  while (i < votes.length) {
    if (votes[i].id === id) {
      return votes[i].data();
    }
    i++;
  }
  return null;
}

async function deleteVote(userId) {
  await db.collection("votes").doc(userId).delete();
}

const votesService = { setVote, getVoteById, deleteVote };

export default votesService;
