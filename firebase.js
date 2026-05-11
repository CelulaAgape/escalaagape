import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMl9OJKxAclv5v-ynFD7bs-RazJn9zx0",
  authDomain: "escala-celula.firebaseapp.com",
  projectId: "escala-celula",
  storageBucket: "escala-celula.firebasestorage.app",
  messagingSenderId: "948233776560",
  appId: "1:948233776560:web:a836f11a09513b4966fa75"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
