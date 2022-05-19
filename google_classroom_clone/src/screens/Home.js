import React, { useEffect } from "react";
import "./Home.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) history("/dashboard");
  }, [loading, user]);
  return (
    <div className="home">
      <div className="home__container">
        <img
          style={{
            width: "120px",
            height: "110px",
            marginLeft: "42%",
            marginTop: "14%",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
          alt="Google Classroom"
          className="home__image"
        />
        <button className="home__login" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Home;
