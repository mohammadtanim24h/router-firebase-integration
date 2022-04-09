import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
    const { userObj } = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            {userObj?.displayName ? <p>Current user is {userObj.displayName}</p> : <></>}
        </div>
    );
};

export default Home;
