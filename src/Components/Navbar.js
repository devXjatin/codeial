import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth,db } from "../Firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../Context/Auth";
function Navbar() {
const {user} = useContext(AuthContext);
  async function handleSignout(){
    await updateDoc(doc(db, 'users', auth.currentUser.uid),{
      isOnline:false
    })
    await signOut(auth);
  }

  return (
    <nav>
      <h3>
        <Link to="/">Messenger</Link>
      </h3>
      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={handleSignout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
