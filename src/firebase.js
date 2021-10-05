import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
//     apiKey: "AIzaSyAaj8XHGz9pZegn1_Tfb5Tt3zH6KAz5kzE",
//   authDomain: "react-quiz-26125.firebaseapp.com",
//   projectId: "react-quiz-26125",
//   storageBucket: "react-quiz-26125.appspot.com",
//   messagingSenderId: "828344462922",
//   appId: "1:828344462922:web:43d0770ead23faeff840b3"
};

const app = initializeApp(firebaseConfig);
export default app;