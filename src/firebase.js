import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import { addDoc,
         collection,
         getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
    apiKey: "AIzaSyBvikNPn7lGsv2-_mC0GTQEgPJpdqZqPxA",
    authDomain: "netflix-clone-c4e33.firebaseapp.com",
    projectId: "netflix-clone-c4e33",
    storageBucket: "netflix-clone-c4e33.firebasestorage.app",
    messagingSenderId: "865698819705",
    appId: "1:865698819705:web:023178462586df1c8baea8",

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email,
            password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = (email, password) => {
    try {
         signInWithEmailAndPassword
        (auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = () => {
    signOut(auth);
}
export{auth,db,login,signup,logout}
