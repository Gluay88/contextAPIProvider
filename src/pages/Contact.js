import React, { useContext } from "react";
import { AppContext } from "../App";

const Contact = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>CONTACT PAGE</h1>
      <p>Call me when you get lost!! .. {username}</p>
    </div>
  );
};

export default Contact;
