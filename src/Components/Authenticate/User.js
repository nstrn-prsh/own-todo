import React, { useState, useEffect,Fragment } from "react";
import fire from "./../../Services/fire";
import Login from "./Login";
import MainLayout from './../../Container/MainLayout';

const User = () => {
     // for user
     const [user, setUser] = useState("");
     // for inputs
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     // for errors
     const [emailError, setEmailError] = useState("");
     const [passwordError, setPasswordError] = useState("");
     // toggle sign in /sign up
     const [hasAccount, setHasAccount] = useState(false);

     //  clear inputs
     const clearInputs = () => {
          setEmail("");
          setPassword("");
     };

     //  clear errors
     const clearErrors = () => {
          setEmailError("");
          setPasswordError("");
     };

     //  log in
     const loginHandler = () => {
          clearErrors();
          fire.auth()
               .signInWithEmailAndPassword(email, password)
               .catch((err) => {
                    switch (err.code) {
                         case "auth/Invalid-email":
                         case "auth/user-disabled":
                         case "auth/user-not-found":
                              setEmailError(err.message);
                              break;
                         case "auth/wrong-password":
                              setPasswordError(err.message);
                              break;
                         default:
                              throw new Error("login error");
                    }
               });
     };

     //  sign up
     const signUpHandler = () => {
          clearErrors();
          fire.auth()
               .createUserWithEmailAndPassword(email, password)
               .catch((err) => {
                    switch (err.code) {
                         case "auth/email-already-in-use":
                         case "auth/invalid-email":
                              setEmailError(err.message);
                              break;
                         case "auth/weak-password":
                              setPasswordError(err.message);
                              break;
                         default:
                              throw new Error("sign up error");
                    }
               });
     };

     //   check if user exists
     const authListener = () => {
          fire.auth().onAuthStateChanged((user) => {
               if (user) {
                    clearInputs();
                    setUser(user);
               } else setUser("");
          });
     };

     useEffect(() => {
          authListener();
     }, []);

     return (
          <Fragment>
               {user ? (
                    <MainLayout />
               ) : (
                    <Login
                         email={email}
                         setEmail={setEmail}
                         password={password}
                         emailError={emailError}
                         hasAccount={hasAccount}
                         setPassword={setPassword}
                         loginHandler={loginHandler}
                         passwordError={passwordError}
                         signUpHandler={signUpHandler}
                         setHasAccount={setHasAccount}
                    />
               )}
          </Fragment>
     );
};

export default User;
