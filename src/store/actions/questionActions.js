export const createQuestion = (question) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('questions').add({
      ...question,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_QUESTION_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_QUESTION_ERROR' }, err);
    });
  }
};