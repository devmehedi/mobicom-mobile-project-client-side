import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUsers] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    setIsLoading(true);

    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUsers(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };

  // Observer User State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  useEffect(() => {
    fetch(`https://murmuring-waters-68454.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    isLoading,
    signinWithGoogle,
    logOut,
  };
};

export default useFirebase;
