import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [userObj, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user); // ei setUser ta kaj kore na onclick function er bhitore authentication hoitase eijonno most probably
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({}) // eitao kaj kore na most probably onclick function er bhitore signout hoitase eijonno
                console.log("Log Out successful");
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { // auth change hoile eita current user info provide kore
            setUser(user); // onAuthStateChanged eitar moddhe state change korle abar kaj kore.
        });
    }, []);

    return { userObj, signInWithGoogle, handleLogOut };
};

export default useFirebase;
