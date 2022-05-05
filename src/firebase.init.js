import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5eKQf9IEdPsdD3oaED1gL1pU3RiRY5ew",
  authDomain: "photographer-6b896.firebaseapp.com",
  projectId: "photographer-6b896",
  storageBucket: "photographer-6b896.appspot.com",
  messagingSenderId: "871422003742",
  appId: "1:871422003742:web:123163b240d38d59977c0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
