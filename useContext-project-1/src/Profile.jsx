import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const name = useContext(UserContext);

  return (
    <div>
      <h2>Profile Component</h2>
      <p>User Name: {name}</p>
    </div>
  );
}

export default Profile;