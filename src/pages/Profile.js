import React, { useContext } from "react";
import ChangeProfile from "../components/ChangeProfile";
import { AppContext } from "../App";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      <p>Here is the props: {username}</p>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
