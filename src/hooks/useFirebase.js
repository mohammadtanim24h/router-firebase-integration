import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    };
    
    return {user, signInWithGoogle};
};

export default useFirebase;
