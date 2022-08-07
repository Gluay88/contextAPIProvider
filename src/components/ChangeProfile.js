import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <>
      <p>Change Profile Component</p>
      <input onChange={(e) => setNewUsername(e.target.value)} />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change username
      </button>
    </>
  );
};

export default ChangeProfile;
