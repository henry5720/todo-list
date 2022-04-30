/* ==================== initialize ==================== */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDocs, deleteDoc, query, orderBy } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyANOcdtKSzhtm4CSUXDtDqNIVGyAWw5EN8",
    authDomain: "test-36fea.firebaseapp.com",
    projectId: "test-36fea",
    storageBucket: "test-36fea.appspot.com",
    messagingSenderId: "1063051018080",
    appId: "1:1063051018080:web:18e0227f9b591d16fea805",
    measurementId: "G-KCLSBK9DWN"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ==================== add ==================== */
async function addDb(id, note){
  const noteRef = collection(db, "notes");
  const docRef=doc(noteRef, id)
  const dateTime = Date.now();
  try {
          await setDoc(docRef, {
              id: id, 
              note: note,
              timestamp: dateTime,
          });
          console.log("Document written with ID: ", docRef.id);
          
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

/* ==================== get ==================== */
async function getDb(setData){
    const q=query(collection(db, "notes"), orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    setData(querySnapshot.docs.map(res=>res.data()));
    // querySnapshot.forEach((doc) => {
    //     notes.push(doc.data());
    // });
    // console.log("querySnapshot:", querySnapshot.docs.map(res=>res.data()));
}

/* ==================== del ==================== */
async function delDb(id){
    await deleteDoc(doc(db, "notes", id));
}


export {db as default, addDb, getDb, delDb};