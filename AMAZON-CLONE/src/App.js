import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./firebase.utils";
import routes from "./routes";
import "./app.scss";
import { setUser, fetchUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(fetchUser(authUser.uid));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const routing = useRoutes(routes);
  return <div>{routing}</div>;
}

export default App;
