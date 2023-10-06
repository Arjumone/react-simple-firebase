import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
    const [user,setUser]=useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
        const loggedUser=result.user;
            setUser(loggedUser)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {/* user? logout : sign in */}
            {user ? <button onClick={handleSignOut}>Sign Out</button> 
            :
            <button onClick={handleGoogleSignIn}>Google login</button>}
            {user && <div>
                <h2>User:{user.displayName}</h2>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;