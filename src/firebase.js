import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDcZ7HI_j792Dv-heh2Crj76Ul6Ub_jV3k",
    authDomain: "chat-app-f461e.firebaseapp.com",
    projectId: "chat-app-f461e",
    storageBucket: "chat-app-f461e.appspot.com",
    messagingSenderId: "484031481626",
    appId: "1:484031481626:web:49ea5a47ff210b8c06cea3"
  }).auth();