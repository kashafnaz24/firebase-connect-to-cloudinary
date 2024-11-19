import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import { getFirestore,collection, query, doc, addDoc, serverTimestamp,} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyCZj6A-s_jsYLo1sODkM0XuAGBwAggDOm8",
    authDomain: "first-project-495b1.firebaseapp.com",
    projectId: "first-project-495b1",
    storageBucket: "first-project-495b1.firebasestorage.app",
    messagingSenderId: "626249488759",
    appId: "1:626249488759:web:a4b266fd054e90397ae972",
    measurementId: "G-EDQB7DMWYY"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
export{
    getFirestore,collection, query, doc, addDoc, serverTimestamp
}