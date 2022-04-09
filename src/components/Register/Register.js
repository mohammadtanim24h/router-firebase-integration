import React from "react";

const Register = () => {
    return (
        <div>
            <h3>Register Now</h3>
            <form>
                <input type="text" placeholder="Your Name" />
                <br /> <br />
                <input type="email" placeholder="Your Email" />
                <br /> <br />
                <input type="password" placeholder="Your Password" /> 
                <br /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
