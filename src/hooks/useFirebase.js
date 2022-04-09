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
    const [test, setTest] = useState('')
    const [userObj, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setTest('hey man whats up')
                setUser(user); // ei setUser ta kaj kore kintu updated value ta je component e userObj pathaisi oikhane paoa jay na. in this case header component e paoa jay na.
                // console.log(user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(userObj);
    console.log(test); // eita uncomment korle bujha jay je click handler er bhitor state change hoy kintu onno component e change hoy na i mean header e change hoy na 

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({}) // eitao kaj kore kintu updated value ta header component e paoa jay na
                console.log("Log Out successful");
            })
            .catch(err => console.log(err))
    };
    console.log(userObj);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { // auth change hoile eita current user info provide kore
            setUser(user); // onAuthStateChanged eitar moddhe state change korle abar kaj kore and updated userObj tao header er moddhe jay.
        });
    }, []);

    return { userObj, signInWithGoogle, handleLogOut };
};

export default useFirebase;
