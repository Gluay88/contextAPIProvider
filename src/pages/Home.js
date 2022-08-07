import React, { useContext } from "react";
import { AppContext } from "../App";
//import useContext
//import AppContext
//cont {} = useContext(AppContext)
const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>Username: {username}</p>
    </div>
  );
};

export default Home;
